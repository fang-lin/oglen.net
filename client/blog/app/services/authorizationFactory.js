/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$http',
        '$rootScope',
        'session',
        'AUTH_EVENTS',
        function ($http, $rootScope, session, AUTH_EVENTS) {
            return {
                login: function (account) {
                    $http
                        .post('/rest/authorization', account)
                        .then(function (res) {
                            if (res.status === 200) {
                                if (res.data.token) {
                                    session.create(res.data);
                                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, session.user());
                                }
                            } else {
                                alert(res.data.code);
                            }
                        });
                },
                toArgot: function () {
                    var argot = session.argot();

                    if (argot) {
                        $http
                            .post('/rest/authorization', {
                                argot: argot
                            })
                            .then(function (res) {
                                if (res.status === 200) {
                                    if (res.data.token) {
                                        session.create(res.data);
                                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, session.user());
                                    }
                                } else {
                                    alert(res.data.code);
                                }
                            });
                    }
                },
                user: function () {
                    return session.user();
                },
                logout: function () {
                    session.destroy();
                    $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                },
                isLogin: function () {
                    return !!session.token();
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