<?php

use Symfony\Component\Yaml\Yaml;

require_once __DIR__ . '/../vendor/autoload.php';

$app = new  \Slim\Slim([
    'config.path' => realpath(__DIR__ . '/../src/config.yml'),
    'templates.path' => __DIR__ . '/../src/views',
    'view' => new \Slim\Views\Twig()
]);

$app->get('/', function () use ($app) {
    $app->render('index.twig');
});

$app->get('/cv', function () use ($app) {
    $employers = Yaml::parse(file_get_contents($app->config('config.path')));
    $app->render('cv.twig', ['employers' => $employers]);
});

$app->run();

