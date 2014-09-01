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

            if (!$rootScope.isLogin) {

                $scope.credentials = {
                    username: '',
                    password: ''
                };

                $scope.login = function (account) {
                    authorization.login(account, function () {
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    });
                };
            }
        }];
});