/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'underscore'
], function (_) {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        'encrypt',
        'authorization',
        'AUTH_EVENTS',
        'SALT',
        function ($rootScope, $scope, encrypt, authorization, AUTH_EVENTS, SALT) {

            if (!$rootScope.isLogin) {

                $scope.credentials = {
                    username: '',
                    password: ''
                };

                $scope.login = function (account) {

                    var _account = _.clone(account);
                    _account.password = encrypt.md5(encrypt.mixSalt(_account.password, SALT));

                    authorization.login(_account);
                };

                $scope.$on(AUTH_EVENTS.notAuthenticated, function (event, msg) {
                    console.log(msg)
                });
            }
        }];
});