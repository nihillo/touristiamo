<?php

namespace touristiamo\controller\image;

// use touristiamo\models\RouteImageModel as ImageModel;
// use touristiamo\models\RouteModel as RouteModel;
use touristiamo\error\HttpError as HttpError;
use touristiamo\helper\TokenHelper as TokenHelper;
use touristiamo\helper\UserHelper as UserHelper;
use touristiamo\helper\ImageHelper as ImageHelper;
use touristiamo\View as Json;
use touristiamo\exception\BDException as BDException;


/**
 * @author I.E.S Francisco Ayala
 */
class ImageCtrl
{
    /**
     *
     * @param integer $routeId
     * @return Json
     */
    /*public static function getImages($routeId)
    {
        try
        {
            $routeImageModel = new RouteImageModel();
            $json = new Json();
            $json->images = $routeImageModel->getAllByRouteId($routeId);
            foreach ($json->images as $image) {
                $image->path = APP_URL_API . '/' . $image->path;
            }
            if (!$json->images)
            {
                HttpError::send(400, 'route-noImagesFound', "There isn't any image from this route");
            }
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());

    }*/

    /**
     *
     * @param integer $routeId
     * @param \ArrayIterator $publicToken
     * @return Json
     */
    // public static function newImage($routeId, $publicToken)
    // {
    //     try
    //     {
    //         $userModel = TokenHelper::checkSign($publicToken);
    //         if ( (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id)) )
    //         {
    //             HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to upload images.");
    //         }
    //         if (empty($_FILES[APP_IMAGES_UPLOAD_NAME]))
    //         {
    //             HttpError::send(400, 'images-nameError', "The images array must be called ". APP_IMAGES_UPLOAD_NAME);
    //         }

    //         $routeModel = new RouteModel($routeId);
    //         $imageUploaded = ImageHelper::upload($routeModel->id, APP_IMAGES_UPLOAD_NAME);
    //         $json = new Json();
    //         $json->numImages = count($imageUploaded);
    //         $json->msgKey = 'images-uploadSuccess';
    //         $json->message = "Images were uploaded successfuly.";
    //         return $json->render();
    //     } catch (BDException $e)
    //     {
    //         HttpError::send(400, 'db-error', $e->getBdMessage());
    //     }
    // }

    /**
     * Only the route own can delete images but anybody can upload images.
     * @param integer $imageId
     * @return Json
     */
    // public static function deleteImage($routeId, $imageId, $publicToken)
    // {
    //     try
    //     {
    //         $userModel = TokenHelper::checkSign($publicToken);
    //         $routeModel = new RouteModel($routeId);

    //         if ($routeModel->userId != $userModel->id && !UserHelper::isAdmin($userModel->id))
    //         {
    //             HttpError::send(401, 'user-notAllowed', "You cannot delete images of other user's routes.");
    //         }
    //         $fileDeleted = ImageHelper::delete($routeId, $imageId);
    //         $json = new Json();
    //         $json->msgKey = 'images-deleteSuccess';
    //         $json->message = 'The file '. $fileDeleted. ' was deleted successfuly.';
    //         return $json->render();
    //     } catch (BDException $e)
    //     {
    //         HttpError::send(400, 'db-error', $e->getBdMessage());
    //     }
    // }

    /**
     *
     * @param integer $routeId
     * @param \ArrayIterator $publicToken
     * @return Json
     */
    public static function upload($publicToken/*, $queryParams, $headers, $body*/) {

        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            if ( (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id)) )
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to upload images.");
            }
            if (empty($_FILES[APP_IMAGES_UPLOAD_NAME]))
            {
                HttpError::send(400, 'images-nameError', "The images array must be called ". APP_IMAGES_UPLOAD_NAME);
            }

            // $routeModel = new RouteModel($routeId);
            $imageUploaded = ImageHelper::upload(APP_IMAGES_UPLOAD_NAME);
            $json = new Json();
            // $json->numImages = count($imageUploaded);
            $json->msgKey = 'images-uploadSuccess';
            $json->message = "Images were uploaded successfuly.";
            $json->image = $imageUploaded;
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }

        // $json = new Json();
        // // $json->query = $queryParams;
        // $json->headers = $headers;
        // $json->auth = $auth;
        // // $json->body = $body;
        // // $json->test = $_FILES;
        //         file_put_contents('./log_'.date("j.n.Y").'.txt', $json->render() . "\n", FILE_APPEND);
        // return $json->render();
    }
}
