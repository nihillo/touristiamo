<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use touristiamo\controller\route\RouteCtrl as RouteCtrl;
use touristiamo\controller\route\RouteAdminCtrl as RouteAdminCtrl;
use touristiamo\controller\route\RouteCommentCtrl as RouteCommentCtrl;
use touristiamo\controller\route\RouteImagesCtrl as RouteImageCtrl;

/**
 * Routes for Routes Zone - Using Route controller
 */
$app->group('/routes', function()
{
    // Allow preflight
    $this->options('', function(Request $request, Response $response, $args)
    {
        return true;
    });

    /**
     * Get all routes from the data base
     */
    $this->get('', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteCtrl::getAll());
    });
    /**
     * Get a route by its id
     */
    $this->get('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteCtrl::getById($args['id']));
    });
    /**
     * Get all routes by country id
     */
    $this->get('/country/{countryId:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteCtrl::getAllByCountry($args['countryId']));
    });
    /**
     * Get all routes by city id
     */
    $this->get('/city/{cityId:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteCtrl::getAllByCity($args['cityId']));
    });
    /**
     * Get all comments from a route by id
     */
    // $this->get('/{id:[0-9]+}/comments', function(Request $request, Response $response, $args)
    // {
    //     return $response->getBody()
    //             ->write(RouteCtrl::getComments($args['id']));
    // });
    /**
     * Get route score
     */
    // $this->get('/{id:[0-9]+}/score', function(Request $request, Response $response, $args)
    // {
    //     return $response->getBody()
    //             ->write(RouteCtrl::getScore($args['id']));
    // });
    /**
     * Get route points
     */
    $this->get('/{id:[0-9]+}/points', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteCtrl::getPoints($args['id']));
    });
    $this->options('/{id:[0-9]+}/points', function(Request $request, Response $response, $args)
    {
        return true;
    });
    /**
     * Create route point
     */
    $this->post('/{id:[0-9]+}/points', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteAdminCtrl::addPoint($args['id'], $request->getHeader('Auth'),
                        $request->getQueryParams()));
    });
    /**
     * Create a new route. Only the user with accesslevel 2 and 1 can post new routes.
     */
    $this->post('', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write( RouteAdminCtrl::create($request->getHeader('Auth'),
                        $request->getQueryParams()) );
    });
    
    /**
     * Update a route. Only the route own user can change the route.
     */
    $this->put('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteAdminCtrl::edit($args['id'], $request->getHeader('Auth'),
                        $request->getQueryParams()));
    });
    
    /**
     * Delete a route
     */
    $this->delete('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteAdminCtrl::delete($args['id'], $request->getHeader('Auth') ));
    });
    
    /**
     * Post new comment. Any user who has a token can post a new comment.
     */
    $this->post('/{routeId:[0-9]+}/comments', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write( RouteCommentCtrl::newComment($args['routeId'], $request->getHeader('Auth'), 
                        $request->getQueryParams()) );
    });
    
    /**
     * Modify a comment that was written by the user who have the token.
     */
    $this->put('/{routeId:[0-9]+}/comments/{commentId:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteCommentCtrl::editComment($args['routeId'], $args['commentId'], 
                        $request->getHeader('Auth'), $request->getQueryParams()));
    });
    
    /**
     * Delete a route. Check if the user is own of the route.
     */
    $this->delete('/{routeId:[0-9]+}/comments/{commentId:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(RouteCommentCtrl::delete($args['routeId'], $args['commentId'], 
                        $request->getHeader('Auth'), $request->getQueryParams()));
    });
    
    
    
    /** 
     * Get all route images by route id.
     */
    // $this->get('/{id:[0-9]+}/images', function(Request $request, Response $response, $args)
    // {   
    //     return $response->getBody()
    //             ->write(RouteImageCtrl::getImages($args['id']));
    // });
    
    /**
     * Post new image
     */
    // $this->post('/{id:[0-9]+}/image', function(Request $request, Response $response, $args)
    // {
    //     return $response->getBody()
    //             ->write(RouteImageCtrl::newImage($args['id'], 
    //                     $request->getHeader('Auth')));
    // });
    
    /**
     * Delete image from a route
     */
    // $this->delete('/{routeId:[0-9]+}/images/{imageId:[0-9]+}', function(Request $request, Response $response, $args)
    // {
    //     return $response->getBody()
    //             ->write(RouteImageCtrl::deleteImage($args['routeId'], $args['imageId'], 
    //                     $request->getHeader('Auth')));
    // });
});
