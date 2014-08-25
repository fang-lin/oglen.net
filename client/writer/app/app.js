/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'app-config',
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
    'use strict';

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
        '$route',
        '$rootScope',
        '$location',
        'Menu',
        'Info',
        'Settings',
        function ($route, $rootScope, $location, Menu, Info, Settings) {

            $rootScope.menu = Menu;
            $rootScope.info = Info;

            Settings.query(function (res) {
                var settings = {};
                res.forEach(function (setting) {
                    settings[setting.key] = setting.value;
                });
                $rootScope.settings = settings;
            });

            var original = $location.path;
            // rewrite $location.path to provide change url without reload.
            $location.path = function (path, reload) {
                if (reload === false) {
                    var lastRoute = $route.current;
                    var un = $rootScope.$on('$locationChangeSuccess', function () {
                        $route.current = lastRoute;
                        un();
                    });
                }
                return original.call($location, path);
            };
        }
    ]);


});