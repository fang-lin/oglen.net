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
    'utilities/all',
    'routes/all',
    'controllers/all',
    'directives/all',
    'filters/all',
    'resources/all',
    'constants/all'
], function (config) {
    'use strict';

    var name = config.name;

    var app = angular
        .module(name, [
            'ngRoute',
            'ngAnimate',
                name + '.routes',
                name + '.utilities',
                name + '.controllers',
                name + '.directives',
                name + '.filters',
                name + '.resources',
                name + '.constants'
        ])
        .run([
            '$rootScope',
            '$location',
            '$window',
            '$route',
            'menu',
            'info',
            'Settings',
            'authorization',
            'AUTH_EVENTS',
            function ($rootScope, $location, $window, $route, menu, info, Settings, authorization, AUTH_EVENTS) {

                $rootScope.menu = menu;
                $rootScope.info = info;

                var loadSettings = function () {
                    Settings.query(function (res) {
                        var settings = {};
                        res.forEach(function (setting) {
                            settings[setting.key] = setting.value;
                        });
                        $rootScope.settings = settings;
                    });
                };

                $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
                    loadSettings();
                    $location.path('/dashboard');
                });

                $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
                    $location.path('/login');
                });

                $rootScope.$on("$routeChangeStart", function (event, next, current) {

                    $rootScope.isLogin = authorization.isLogin();

                    if ($rootScope.isLogin) {
                        $rootScope.settings || loadSettings();
                    } else {
                        $location.path('/login');
                    }
                });
            }
        ]);
});