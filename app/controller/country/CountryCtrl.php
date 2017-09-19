<?php

namespace touristiamo\controller\country;

use touristiamo\models\CountryModel as CountryModel;
use touristiamo\models\CityModel as CityModel;
use touristiamo\models\RouteModel as RouteModel;
use touristiamo\models\PictureModel as PictureModel;
use touristiamo\models\CommentModel as CommentModel;
use touristiamo\View as Json;
use touristiamo\error\HttpError as HttpError;
use touristiamo\helper\TokenHelper as TokenHelper;
use touristiamo\helper\UserHelper as UserHelper;
use touristiamo\exception\BDException as BDException;


/**
 * This controller manages countries
 *
 * @author I.E.S Francisco Ayala
 */
class CountryCtrl
{
    /**
     * Get all countries
     * @return Json
     */
    public static function getCountries()
    {
        $countryModel = new CountryModel();
        $json = new Json();
        $json->countries = $countryModel->getAll();

        return $json->render();
    }


    /**
     * Create a new country in the data base.
     * @param \ArrayIterator $args
     * @param \ArrayIterator $publicToken
     * @return Json
     */
    public static function newCountry($args, $publicToken)
    {

        $userModel = TokenHelper::checkSign($publicToken);
        if (!isset($args['name_en']) || !isset($args['name_es']) || !isset($args['name_it']))
        {
            HttpError::send(400, 'country-missingInfo', 'You must fill the country name');
        }
        if (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id))
        {
            HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to create countries");
        }
        $countryModel = new CountryModel();
        $countryModel->name_en = trim($args['name_en']);
        $countryModel->name_es = trim($args['name_es']);
        $countryModel->name_it = trim($args['name_it']);
        if ($countryModel->save())
        {
            $json = new Json();
            $json->msgKey = 'country-saveSuccess';
            $json->message = "The country $countryModel->name_en was saved successfuly.";
            return $json->render();
        }
    }


    /**
     * Update the country
     * @param integer $countryId
     * @param \ArrayIterator $publicToken
     * @return Json
     */
    public static function editCountry($countryId, $publicToken, $args)
    {
        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            $countryModel = new CountryModel($countryId);
            if (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id))
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to update this country");
            }
            $countryModel->name_en = (!isset($args['name_en'])) ? $countryModel->name_en : trim($args['name_en']);
            $countryModel->name_es = (!isset($args['name_es'])) ? $countryModel->name_es : trim($args['name_es']);
            $countryModel->name_itn = (!isset($args['name_it'])) ? $countryModel->name_it : trim($args['name_it']);
            if ($countryModel->update())
            {
                $json = new Json();
                $json->msgKey = 'country-modifySuccess';
                $json->message = "The country was modified successfuly.";
                return $json->render();
            }
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }


    /**
     * This method delete all routes, cities and
     * @param integer $countryId
     * @param \ArrayIterator $publicToken
     */
    public static function deleteCountry($countryId, $publicToken)
    {
        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            if (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id))
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to delete countries.");
            }
            $countryModel = new CountryModel($countryId);
            $cityModel = new CityModel();
            $routeModel = new RouteModel();
            $pictureModel = new PictureModel();
            $commentModel = new CommentModel();
            // Delete all cities from this country
            foreach ($cityModel->getAllByCountryId($countryModel->id) as $city)
            {
                $cityMod = new CityModel($city->id);
                // Delete all comments, pictures and routes from this city
                foreach ($routeModel->getAllByCity($cityMod->id) as $route)
                {
                    $routeMod = new RouteModel($route->id);
                    if (!$pictureModel->deleteAllByRouteId($routeMod->id) || !$commentModel->deleteAllByRouteId($routeMod->id))
                    {
                        HttpError::send(500, 'image-deleteError', 'Fail to delete images or comments from this route');
                    }
                    $routeMod->delete();
                }
                $cityMod->delete();
            }
            if ($countryModel->delete())
            {
                $json = new Json();
                $json->msgKey = 'country-deleteSuccess';
                $json->message = "The country was deleted successfuly.";
                return $json->render();
            }
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
}
