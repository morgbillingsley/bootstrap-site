<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
use App\Exception\FileUploadException;

class FileUploader
{
    public $uploadsDirectory;
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->uploadsDirectory = self::getUploadDirectory();
        $this->slugger = $slugger;
    }

    public function upload(UploadedFile $file)
    {
        try {
            $fileName = $this->getFileName($file);
            $uploadDir = self::getUploadDirectory();
            $file->move($uploadDir, $fileName);
            return $uploadDir . '/' . $fileName;
        } catch (FileException $e) {
            throw new MediaUploadException($fileName);
        }
    }

    private function getFileName(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        return $safeFilename.'-'.uniqid().'.'.$file->guessExtension();
    }
    
    private static function getUploadDirectory()
    {
        $srcDir = dirname(__DIR__);
        $projectDir = dirname($srcDir);
        return $projectDir . "/public/uploads";
    }
}

?>