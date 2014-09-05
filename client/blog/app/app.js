/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/all',
    'routes/all',
    'controllers/all',
    'directives/all',
    'filters/all',
    'resources/all',
    'constants/all',
    'angular',
    'angular-route',
    'angular-animate',
    'angular-translate'
], function (config) {
    'use strict';

    var name = config.name;
    angular
        .module(name, [
            'ngRoute',
            'ngAnimate',
                name + '.routes',
                name + '.services',
                name + '.controllers',
                name + '.directives',
                name + '.filters',
                name + '.resources',
                name + '.constants'
        ])
        .run([
            '$rootScope',
            'menu',
            'info',
            'Settings',
            function ($rootScope, menu, info, Settings) {

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