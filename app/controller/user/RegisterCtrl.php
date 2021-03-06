<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace touristiamo\controller\user;

use touristiamo\models\UsersModel as UserModel;
use touristiamo\helper\TokenHelper as TokenHelper;
use touristiamo\error\HttpError as HttpError;
use touristiamo\service\EmailServcie as EmailService;
use touristiamo\exception\BDException as BDException;
use touristiamo\View as Json;

/**
 * Controller of user register
 *
 * @author I.E.S Francisco Ayala
 */
class RegisterCtrl
{
    /**
     * Insert new user into data base and send an email
     * @param \ArrayIterator $args
     */
    public static function register($args)
    {
        $email = $args['email'];
        $pass = $args['pass'];
        $userName = trim($args['userName']);
        $appToken = $args['appToken'];

        // Checking
        if ($appToken !== APP_TOKEN)
        {
            HttpError::send(400, 'access-appTokenError', 'Wrong app token');
        }
        if (empty($email) || empty($pass) || empty($userName))
        {
            HttpError::send(400, 'access-missingInfo', 'You must fill the email, password and username.');
        }
        if (!filter_var($args['email'], FILTER_VALIDATE_EMAIL))
        {
            HttpError::send(400, 'access-notValidEmail', 'The email is not valid.');
        }

        // Create model
        $userModel = new UserModel();
        $userModel->email = $email;
        $userModel->setPassword(sha1($pass));
        $userModel->name = $userName;
        $userModel->setToken(TokenHelper::generate($email, $pass));

        try
        {
            if ($userModel->save())
            {
                $json = new Json();
                $json->email = $userModel->email;

                $subject = 'Activate account';
                $message = '<h1>Welcome to '. APP_NAME. '</h1>';
                $message .= '<p>To finish the register process, click on the link below</p>';
                $message .= '<a href="'. APP_URL_UI . APP_UI_ACTIVATION_URL . $userModel->getToken(). '">';
                $message .= APP_URL_UI . APP_UI_ACTIVATION_URL . $userModel->getToken(). '</a>';
                if (EmailService::sendEmail($userModel->email, $subject, $message, $userModel->name))
                {
                    $json->msgKey = 'access-mailSuccess';
                    $json->message = 'The mail was sent successfuly.';
                }

                return $json->render();
            }
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }

    /**
     * Active the user in the app
     * @param String $token
     */
    public static function activate($token)
    {
        $userModel = new UserModel();
        if (!$userModel->fillByToken($token))
        {
            HttpError::send(400, 'access-notValidToken', 'The token is not valid.');
        }
        $userModel->activated = true;
        try
        {
            if ($userModel->update())
            {
                $json = new Json();
                $json->email = $userModel->email;
                $json->msgKey = 'access-activateSuccess';
                $json->message = 'The user was activated sucessfully.';
                return $json->render();
            }

        } catch (BDException $e)
        {
            return $e->getBdMessage();
        }
    }

}
