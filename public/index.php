<?php

use Symfony\Component\Yaml\Yaml;

require_once __DIR__ . '/../vendor/autoload.php';

$app = new  \Slim\Slim([
    'data.path' => realpath(__DIR__ . '/../src/data.yml'),
    'templates.path' => __DIR__ . '/../src/views',
    'view' => new \Slim\Views\Twig()
]);

$app->get('/', function () use ($app) {
    $app->render('index.twig', ['pageTitle' => 'Home']);
});

$app->get('/cv', function () use ($app) {
    $config = Yaml::parse(file_get_contents($app->config('data.path')));
    $profile = $config['profile'];
    $employers = $config['employers'];
    $education = $config['education'];
    $technologies = $config['technologies'];
    $methodologies = $config['methodologies'];
    $interests = $config['interests'];

    $app->render('cv.twig', [
        'pageTitle' => 'CV',
        'profile' => $profile,
        'employers' => $employers,
        'education' => $education,
        'technologies' => $technologies,
        'methodologies' => $methodologies,
        'interests' => $interests
    ]);
});

$app->run();

