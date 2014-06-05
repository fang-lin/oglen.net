/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/CommentsController',
    'controllers/HomeController',
    'controllers/PostsController',
    'controllers/SettingsController',
    'controllers/UsersController',
    'angular'
], function (config, CommentsController, HomeController, PostsController, SettingsController, UsersController) {

    var controllers = angular.module(config.name + '.controllers', []).
        controller('CommentsController', CommentsController).
        controller('HomeController', HomeController).
        controller('PostsController', PostsController).
        controller('SettingsController', SettingsController).
        controller('UsersController', UsersController);

    return controllers;
});