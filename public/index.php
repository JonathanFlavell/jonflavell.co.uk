<?php

require_once __DIR__ . '/../vendor/autoload.php';

$app = new  \Slim\Slim([
    'templates.path' => __DIR__ . '/../src/views',
    'view' => new \Slim\Views\Twig()
]);

$app->get('/', function () use ($app) {
    $app->render('index.twig');
});

$app->get('/cv', function () use ($app) {
    $app->render('cv.twig');
});

$app->run();

