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
        'Roles',
        function ($rootScope, $scope, $route, $routeParams, $location, Roles) {

            $rootScope.$watch('settings', function (settings) {
                if (settings) {
                    var skip = $routeParams.skip || 0,
                        limit = $routeParams.limit || 20,
                        count = Roles.count.get();

                    $scope.roles = Roles.query({skip: skip, limit: limit});
                }
            });
        }];
});