<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use touristiamo\controller\image\ImageCtrl as ImageCtrl;
// use touristiamo\controller\image\RouteAdminCtrl as RouteAdminCtrl;
// use touristiamo\controller\image\RouteCommentCtrl as RouteCommentCtrl;
// use touristiamo\controller\image\RouteImagesCtrl as RouteImageCtrl;

/**
 * Routes for Images Zone - Using Image controller
 */
$app->group('/image', function()
{
    // Allow preflight
    $this->options('', function(Request $request, Response $response, $args)
    {
        return true;
    });

    /**
     * Get all images from the data base
     */
    // $this->get('', function(Request $request, Response $response, $args)
    // {
    //     return $response->getBody()
    //             ->write(RouteCtrl::getAll());
    // });
    /**

    /**
     * Create a new image. Only the user with accesslevel 2 and 1 can post new images.
     */
    $this->post('', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write( ImageCtrl::upload($request->getHeader('Auth')/*,
                        $request->getQueryParams(),
                        $request->getHeaders(),
                        $request->getParsedBody()*/
                    ) );
    });

    /**
     * Update an image
     */
    // $this->put('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    // {
    //     return $response->getBody()
    //             ->write(RouteAdminCtrl::edit($args['id'], $request->getHeader('Auth'),
    //                     $request->getQueryParams()));
    // });

    /**
     * Delete an image
     */
    // $this->delete('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    // {
    //     return $response->getBody()
    //             ->write(RouteAdminCtrl::delete($args['id'], $request->getHeader('Auth') ));
    // });
});