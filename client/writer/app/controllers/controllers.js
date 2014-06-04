/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'controllers/CommentsController',
    'controllers/HomeController',
    'controllers/PostsController',
    'controllers/SettingsController',
    'controllers/UsersController'
], function (config) {

    var controllers = angular.module(config.name + '.controllers', [
        'CommentsController',
        'HomeController',
        'PostsController',
        'SettingsController',
        'UsersController'
    ]);

    console.log(controllers);
});