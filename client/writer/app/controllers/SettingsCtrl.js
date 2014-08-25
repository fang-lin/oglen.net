/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$route',
        '$routeParams',
        '$location',
        'Settings',
        function ($rootScope, $scope, $route, $routeParams, $location, Settings) {

            $rootScope.$watch('settings', function (settings) {
                if (settings) {

                    $scope.settings = Settings.query();
                }
            });
        }];
});