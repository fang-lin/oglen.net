/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'crypto'
], function (crypto) {
    'use strict';

    var md5 = function (code) {
        return crypto.createHash('md5').update(code).digest('hex');
    };

    return [
        '$http',
        '$rootScope',
        'session',
        'AUTH_EVENTS',
        function ($http, $rootScope, session, AUTH_EVENTS) {
            return {
                login: function (account) {

                    $http
                        .post('/rest/authorization', {
                            username: account.username,
                            password: md5(account.password)
                        })
                        .then(function (res) {
                            if (res.status === 200 && res.data.token) {
                                session.create(res.data.token);
                                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                            } else {
                                alert(res.data.code);
                            }
                        })
                },
                logout: function () {

                    session.destroy();
                    $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                },
                isLogin: function () {

                    return !!session.isActive();
                }
//                isAuthorized: function (authorizedRoles) {
//                    if (!angular.isArray(authorizedRoles)) {
//                        authorizedRoles = [authorizedRoles];
//                    }
//
//                    return (this.isAuthenticated()
//                        && authorizedRoles.indexOf(session.userRole) !== -1);
//                }
            }
        }];
});