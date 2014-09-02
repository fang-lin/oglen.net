/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        'authorization',
        'AUTH_EVENTS',
        function ($rootScope, $scope, authorization, AUTH_EVENTS) {

            if (!$rootScope.isLogin) {

                $scope.credentials = {
                    username: '',
                    password: ''
                };

                $scope.login = function (account) {
                    authorization.login(account, function () {

                    });
                };

                $scope.$on(AUTH_EVENTS.notAuthenticated, function (event, msg) {
                    console.log(msg)
                });
            }
        }];
});