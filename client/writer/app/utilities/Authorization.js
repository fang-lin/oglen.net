/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$http',
        '$window',
        'session',
        function ($http, $window, session) {
            return {
                login: function (credentials) {
                    return $http.post('/rest/authorization', credentials)
                        .then(function (res) {
                            console.log(res)
                            $window.sessionStorage.token = res.data.token;

                            console.log($window.sessionStorage.token);
//                            session.create(res.id, res.userId, res.role);
                        });
                },
                isAuthenticated: function () {
                    return !!session.userId;
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