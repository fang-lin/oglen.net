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
        'AUTH_EVENTS',
        function ($rootScope, $scope, $location, authorization, AUTH_EVENTS) {

            $scope.credentials = {
                username: '',
                password: ''
            };

            $scope.login = function (credentials) {
                authorization.login(credentials, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                });
            };
        }];
});