/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/DashboardCtrl',
    'controllers/PostsCtrl',
    'controllers/PostCtrl',
    'controllers/PostCatesCtrl',
    'controllers/CommentsCtrl',
    'controllers/UsersCtrl',
    'controllers/UserCtrl',
    'controllers/SettingsCtrl',
    'angular'
], function (config, DashboardCtrl, PostsCtrl, PostCtrl, PostCatesCtrl, CommentsCtrl, UsersCtrl, UserCtrl, SettingsCtrl) {

    var controllers = angular.module(config.name + '.controllers', []).
        controller('DashboardCtrl', DashboardCtrl).
        controller('PostsCtrl', PostsCtrl).
        controller('PostCtrl', PostCtrl).
        controller('PostCatesCtrl', PostCatesCtrl).
        controller('CommentsCtrl', CommentsCtrl).
        controller('UsersCtrl', UsersCtrl).
        controller('UserCtrl', UserCtrl).
        controller('SettingsCtrl', SettingsCtrl);

    return controllers;
});