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
            '$window',
            'menu',
            'info',
            'Settings',
            function ($rootScope, $window, menu, info, Settings) {

                console.log($window.sessionStorage.token);

                $rootScope.menu = menu;
                $rootScope.info = info;

                Settings.query(function (res) {
                    var settings = {};
                    res.forEach(function (setting) {
                        settings[setting.key] = setting.value;
                    });
                    $rootScope.settings = settings;
                });
            }
        ]);
});