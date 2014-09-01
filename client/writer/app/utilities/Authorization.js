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
        'session',
        function ($http, session) {
            return {
                login: function (account, fn) {

                    $http
                        .post('/rest/authorization', {
                            username: account.username,
                            password: md5(account.password)
                        })
                        .then(function (res) {
                            if (res.data.token) {
                                session.create(res.data.token);
                            }
                            fn && fn();
                        });
                },
                logout: function (fn) {
                    session.destroy();
                    fn && fn();
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