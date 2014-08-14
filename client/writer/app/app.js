/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'angular-route',
    'angular-animate',
    'angular-translate',
    'routes/routes',
    'controllers/all',
    'directives/all',
    'filters/filters',
    'resources/all',
    'constants/all'
], function (config) {

    var name = config.name;

    var app = angular.module(name, [
        'ngRoute',
        'ngAnimate',
            name + '.routes',
            name + '.controllers',
            name + '.directives',
            name + '.filters',
            name + '.resources',
            name + '.constants'
    ]).run([
        '$rootScope',
        'Menu',
        'Info',
        function ($rootScope, Menu, Info) {

            $rootScope.Menu = Menu;
            $rootScope.Info = Info;

        }
    ]);
});