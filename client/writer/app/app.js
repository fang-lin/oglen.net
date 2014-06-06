/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'routes/routes',
    'controllers/collector',
    'directives/collector',
    'filters/filters',
    'services/collector'
], function (config) {

    var name = config.name;

    var app = angular.module(name, [
        'ngRoute',
        'ngAnimate',
            name + '.routes',
            name + '.controllers',
            name + '.directives',
            name + '.filters',
            name + '.services'
    ]).run([
        '$rootScope',
        'mainMenu',
        'extConfig',
        function ($rootScope, mainMenu, extConfig) {
            $rootScope.config = {
                menu: mainMenu,

            }
        }
    ]);

    console.log(WebSocket);
});