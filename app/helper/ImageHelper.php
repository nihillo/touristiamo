<?php

namespace touristiamo\helper;

use touristiamo\models\PictureModel as PictureModel;

/**
 * This class help us to manage images.
 *
 * @author I.E.S Francisco Ayala
 */
class ImageHelper
{
    /**
     * 
     * @param string $imgArrayName
     * @return array
     */
    public static function upload($imgArrayName)
    {
        $directory = APP_IMAGES_DIRECTORY;
        if (!is_dir($directory) && !mkdir($directory, 0755) && 
                !is_readable($directory))
        {
            HttpError::send(500, "The routes image directory cannot be accessed. You must look permissions please.");
        }
        

        $image =self::uploadImage(time() . '_' . $_FILES[$imgArrayName]['name'], $_FILES[$imgArrayName]['type'], $directory, $_FILES[$imgArrayName]['tmp_name']);
        // $images = [];
        // for ($i = 0; $i < count($_FILES[$imgArrayName]['name']); $i++)
        // {
        //     $fileName = time(). '_'. $_FILES[$imgArrayName]['name'][$i];
        //     $fileType = $_FILES[$imgArrayName]['type'][$i];
        //     array_push($images, self::uploadImage($fileName, $fileType, 
        //             $directory, $_FILES[$imgArrayName]['tmp_name'][$i]) );
        // }      
        return $image;
    }
    
    /**
     * 
     * @param integer $routeId
     * @param integer $imageId
     * @return string
     */
    public static function delete($routeId, $imageId)
    {
        $directory = APP_IMAGES_DIRECTORY. DS. 'routes'. DS. $routeId;
        if (!is_dir($directory) && !is_readable($directory))
        {
            HttpError::send(500, "The routes image directory cannot be accessed. You must look permissions please.");
        }
        $pictureModel = new PictureModel($imageId);
        $fileUrl = explode('/', $pictureModel->image);
        $file = $fileUrl[count($fileUrl) - 1];
        
        if (!unlink($directory. DS. $file) || !$pictureModel->delete())
        {
            HttpError::send(500, "There was an error to delete the file ". $file);
        }
        
        return $file;
    }


    
    /**
     * 
     * @param string $fileName
     * @param string $fileType
     * @param string $directory
     * @param string $imgArrayName
     * @return PictureModel
     */
    private static function uploadImage($fileName, $fileType, $directory, $tmpName)
    {
        if (preg_match('/.+\.(jpg|png|gif)$/', $fileName) && 
                    preg_match('/image\/(jpeg|png|gif)$/', $fileType) )
        {
            if (move_uploaded_file($tmpName, $directory. DS. $fileName))
            {
                // $pictureModel = new PictureModel();
                // $pictureModel->image = APP_URL. '/images/routes/'. $routeId. '/'. $fileName;
                // $pictureModel->routeId = $routeId;
                // $pictureModel->save();
                // return $pictureModel;
                return '/images' . DS . $fileName;
            }
        }
    }
}
