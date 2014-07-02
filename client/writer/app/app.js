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
    'services/collector',
    'angular-ui-tinymce'
], function (config) {

    var name = config.name;

    var app = angular.module(name, [
        'ngRoute',
        'ngAnimate',
            name + '.routes',
            name + '.controllers',
            name + '.directives',
            name + '.filters',
            name + '.services',
        'ui.tinymce'
    ]).run([
        '$rootScope',
        'mainMenu',
        'siteConfig',
        function ($rootScope, mainMenu, siteConfig) {

            $rootScope.menu = mainMenu;
            $rootScope.title = siteConfig.title;
            $rootScope.description = siteConfig.description;
            $rootScope.keywords = siteConfig.keywords;
            $rootScope.generator = siteConfig.generator;
            $rootScope.version = siteConfig.version;

        }
    ]);
});