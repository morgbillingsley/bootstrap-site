<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use App\Form\UserType;

class UserSignupController extends AbstractController
{
    /**
     * @Route("/user/signup", name="user_signup", methods={"GET", "POST"})
     */
    public function index(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $form = $this->getUserForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $plainPassword = $form->get("plainPassword")->getData();
            $encodedPassword = $passwordEncoder->encodePassword($user, $plainPassword);
            $user->setPassword($encodedPassword);
            $this->saveUser($user);
            return $this->redirectToRoute('user_signup_success');
        }
        return $this->render('user_signup/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/user/signup/success", name="user_signup_success", methods={"GET"})
     */
    public function signupSuccess()
    {
        return $this->render('user_signup/success.html.twig');
    }

    private function getUserForm()
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        return $form;
    }

    private function saveUser(User $user)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();
    }
}
