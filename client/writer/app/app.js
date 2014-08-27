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
            'Menu',
            'Info',
            'Settings',
            function ($rootScope, Menu, Info, Settings) {

                $rootScope.menu = Menu;
                $rootScope.info = Info;

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