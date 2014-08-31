/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$location',
        '$q',
        'session',
        'AUTH_EVENTS',
        function ($rootScope, $location, $q, session, AUTH_EVENTS) {
            return {
                request: function (req) {
                    req.headers = req.headers || {};

                    if (session.token) {
                        req.headers.Authorization = 'Bearer ' + session.token;
                    }
                    return req;
                },
                requestError: function (res) {
                    return req;
                },
                response: function (res) {
                    return res || $q.when(res);
                },
                responseError: function (res) {
                    if (res.status === 401) {
                        if (res.data.message === 'jwt expired') {
                            $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout);
                        }
                        $location.path('/login');
                    }
                    return $q.reject(res);
                }
            };
        }];
});