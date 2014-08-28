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
        '$window',
        'session',
        function ($http, $window, session) {
            return {
                login: function (credentials, callback) {

                    credentials.password = md5(credentials.password);

                    $http.post('/rest/authorization', credentials)
                        .then(function (res) {
                            $window.sessionStorage.token = res.data.token;
                            callback();
                        });
                },
                logout: function (callback) {
                    delete $window.sessionStorage.token;
                    callback();
                },
                isAuthenticated: function () {
                    return $window.sessionStorage.token;
                },
                isAuthorized: function (authorizedRoles) {
                    if (!angular.isArray(authorizedRoles)) {
                        authorizedRoles = [authorizedRoles];
                    }

                    return (this.isAuthenticated()
                        && authorizedRoles.indexOf(session.userRole) !== -1);
                }
            }
        }];
});