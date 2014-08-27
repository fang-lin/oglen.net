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
            $rootScope.pager = function (count, skip, limit, size) {
                var pager = [],
                    total = Math.ceil(count / limit);

                if (total < 2) {
                    return pager;
                }

                var len = total - 0,
                    page = 0;

                if (total > size) {
                    len = size - 0;
                    page = skip / limit - Math.floor(size / 2);

                    if (page < 0) {
                        page = 0;
                    }

                    if (page > total - size) {
                        page = total - size;
                    }
                }

                if (page > 0) {
                    pager.push({
                        page: 1,
                        skip: 0
                    });
                }

                for (var i = page, l = page + len; i < l; ++i) {
                    pager.push({
                        page: i + 1,
                        skip: i * limit
                    });
                }

                if (i < total) {
                    pager.push({
                        page: total,
                        skip: (total - 1) * limit
                    });
                }

                return pager;
            };

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