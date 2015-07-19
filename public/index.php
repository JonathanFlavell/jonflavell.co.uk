<?php

use Symfony\Component\Yaml\Yaml;

require_once __DIR__ . '/../vendor/autoload.php';

$app = new  \Slim\Slim([
    'config.path' => realpath(__DIR__ . '/../src/config.yml'),
    'templates.path' => __DIR__ . '/../src/views',
    'view' => new \Slim\Views\Twig()
]);

$app->get('/', function () use ($app) {
    $app->render('index.twig', ['pageTitle' => 'Home']);
});

$app->get('/cv', function () use ($app) {
    $config = Yaml::parse(file_get_contents($app->config('config.path')));
    $profile = $config['profile'];
    $employers = $config['employers'];
    $education = $config['education'];
    $technologies = $config['technologies'];
    $interests = $config['interests'];

    $app->render('cv.twig', [
        'pageTitle' => 'CV',
        'profile' => $profile,
        'employers' => $employers,
        'education' => $education,
        'technologies' => $technologies,
        'interests' => $interests
    ]);
});

$app->run();

