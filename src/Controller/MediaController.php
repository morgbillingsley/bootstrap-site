<?php

namespace App\Controller;

use App\Entity\Media;
use App\Repository\MediaRepository;
use App\Service\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/admin/media")
 */
class MediaController extends AbstractController
{
    /**
     * @Route("/", name="media_index", methods={"GET"})
     */
    public function index(MediaRepository $mediaRepository): Response
    {
        return $this->render('admin/media/index.html.twig');
    }

    /**
     * @Route("/images", name="media_images", methods={"GET"})
     */
    public function images(MediaRepository $mediaRepository)
    {
        $images = $mediaRepository->findAllImages();
        $imageArray = array_map([$this, 'mediaObjectToArray'], $images);
        return new JsonResponse($imageArray);
    }

    private function mediaObjectToArray(Media $media)
    {
        return array(
            'id' => $media->getId(),
            'type' => $media->getType(),
            'url' => $media->getUrl(),
        );
    }

    /**
     * @Route("/other", name="media_other", methods={"GET"})
     */
    public function other(MediaRepository $mediaRepository)
    {
        $other = $mediaRepository->findAllOther();
        $otherArray = array_map([$this, 'mediaObjectToArray'], $other);
        return new JsonResponse($otherArray);
    }

    /**
     * @Route("/new", name="media_new", methods={"POST"})
     */
    public function new(Request $request, FileUploader $uploader): JsonResponse
    {
        $file = $request->files->get('media_upload');
        if (!empty($file)) {
            $fileName = $uploader->upload($file);
            $media = $this->createMediaObject($fileName);
            return new JsonResponse(['error' => false, 'path' => $fileName]);
        } else {
            return new JsonResponse(['error' => true, 'message' => 'No file was submitted.']);
        }
    }

    /**
     * @Route("/{id}", name="media_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Media $media): JsonResponse
    {
        if ($this->isCsrfTokenValid('delete'.$media->getId(), $request->request->get('_token'))) {
            unlink($media->getPath());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($media);
            $entityManager->flush();
            return new JsonResponse(['error' => false, 'message' => 'The file was successfully deleted.']);
        } else {
            return new JsonResponse(['error' => true, 'message' => 'A valid token was not provided.']);
        }
    }

    private function createMediaObject(string $fileName): Media
    {
        $media = new Media();
        $media->setFromFileName($fileName);
        $this->saveMedia($media);
        return $media;
    }

    private function saveMedia(Media $media)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($media);
        $entityManager->flush();
    }
}
