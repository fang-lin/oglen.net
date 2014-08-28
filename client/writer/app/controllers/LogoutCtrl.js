/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$location',
        'authorization',
        function ($rootScope, $scope, $location, authorization) {

            authorization.logout(function () {
                $location.path('/login');
            });
        }];
});