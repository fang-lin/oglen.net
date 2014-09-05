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
    'routes/all',
    'controllers/all',
    'directives/all',
    'filters/all',
    'resources/all',
    'services/all',
    'constants/all'
], function (config) {
    'use strict';

    var name = config.name;

    var app = angular
        .module(name, [
            'ngRoute',
            'ngAnimate',
                name + '.routes',
                name + '.controllers',
                name + '.directives',
                name + '.filters',
                name + '.resources',
                name + '.services',
                name + '.constants'
        ])
        .run([
            '$rootScope',
            '$location',
            '$route',
            '$log',
            'menu',
            'info',
            'Settings',
            'authorization',
            'AUTH_EVENTS',
            function ($rootScope, $location, $route, $log, menu, info, Settings, authorization, AUTH_EVENTS) {

                console.log($route)

                $rootScope.menu = menu;
                $rootScope.info = info;

                $rootScope.fetchSettings = function (force) {
                    if (force || !$rootScope.settings) {
                        Settings.query(function (res) {
                            var settings = {};
                            res.forEach(function (setting) {
                                settings[setting.key] = setting.value;
                            });
                            $rootScope.settings = settings;
                        });
                    }
                };

                $rootScope.$on(AUTH_EVENTS.loginSuccess, function (event) {
                    $log.log(AUTH_EVENTS.loginSuccess);

                    $rootScope.isLogin = true;
                    $rootScope.user = authorization.user();
                    $rootScope.fetchSettings();
                    $location.path('/dashboard');
                });

                $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
                    $log.log(AUTH_EVENTS.logoutSuccess);

                    $rootScope.isLogin = false;
                    $location.path('/login');
                });

                $rootScope.$on(AUTH_EVENTS.sessionTimeout, function () {
                    $log.log(AUTH_EVENTS.sessionTimeout);

                    authorization.logout();
                    $rootScope.isLogin = false;
                    $location.path('/login');
                });

                $rootScope.$on(AUTH_EVENTS.invalidSession, function () {
                    $log.log(AUTH_EVENTS.invalidSession);

                    authorization.logout();
                    $rootScope.isLogin = false;
                    $location.path('/login');
                });

                $rootScope.$on(AUTH_EVENTS.notAuthorized, function () {
                    $log.log(AUTH_EVENTS.notAuthorized);
                });

                $rootScope.$on(AUTH_EVENTS.notAuthenticated, function () {
                    $log.log(AUTH_EVENTS.notAuthenticated);
                });

                $rootScope.$on('$routeChangeStart', function (event, next, current) {
                    $log.log('$rootScope.$on:$routeChangeStart');

                    if ($rootScope.isLogin) {
                        if (next.access && next.access.requireLogout) {
                            $location.path('/dashboard');
                        }
                    } else {
                        if (next.access && next.access.requireLogin) {
                            $location.path('/login');
                        }
                    }
                });

                $rootScope.isLogin = authorization.isLogin();
                $rootScope.user = authorization.user();

                if ($rootScope.isLogin) {
                    $rootScope.fetchSettings();
                }
            }
        ]);
});