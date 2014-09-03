/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$q',
        'session',
        'AUTH_EVENTS',
        function ($rootScope, $q, session, AUTH_EVENTS) {
            return {
                request: function (config) {
                    var token = session.token();
                    if (token) {
                        config.headers = config.headers || {};
                        config.headers.Authorization = 'Bearer ' + token;
                    }
                    return config;
                },
                requestError: function (rejection) {

                    return $q.reject(rejection);
                },
                response: function (res) {
                    return res;
                },
                responseError: function (rejection) {
                    if (rejection.status === 401) {

                        var data = rejection.data;

                        if (data.code === 'not_authenticated') {

                            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated, data.msg);

                        } else if (data.code === 'invalid_token') {

                            if (data.msg === 'jwt expired' && session.token()) {
                                $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout);
                            }
                        } else if (data.code === 'not_authorized') {

                            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                        }
                    }
                    return $q.reject(rejection);
                }
            };
        }];
});