<?php

if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $file = __DIR__ . $_SERVER['REQUEST_URI'];
    if (is_file($file)) {
        return false;
    }
}
require __DIR__. DIRECTORY_SEPARATOR. '..'. DIRECTORY_SEPARATOR. '..'. 
        DIRECTORY_SEPARATOR. 'app'. DIRECTORY_SEPARATOR. 'config.php';
require APP_DIRECTORY . DS. 'vendor'. DS. 'autoload.php';

if (!APP_MODE_DEBUG) 
{
    header('Content-Type: application/json');
    $c = new \Slim\Container(); //Create Your container

    // Error 404 handler
    $c['notFoundHandler'] = function ($c) {
        return function ($request, $response) use ($c) {
            return $c['response']
                ->withStatus(404)
                ->write(json_encode([
                        'message' =>  "Resource not found"
                    ])
                );
        };
    };
    
    // Error 405 handler
    $c['notAllowedHandler'] = function ($c) {
        return function ($request, $response, $methods) use ($c) {
            return $c['response']
                ->withStatus(405)
                ->withHeader('Allow', implode(', ', $methods))
                ->write(json_encode([
                    'message'   =>  'Method must be one of: ' . implode(', ', $methods)
                ])
            );
        };
    };
}


// Instantiate the app
$app = (!isset($c)) ? new \Slim\App() : new \Slim\App($c);

// Register routes
require APP_DIRECTORY. DS. 'routes.php';

// Configure CORS
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

// Run app
$app->run();