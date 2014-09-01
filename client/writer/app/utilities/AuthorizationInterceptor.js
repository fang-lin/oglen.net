/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        'session',
        'AUTH_EVENTS',
        function ($rootScope, session, AUTH_EVENTS) {
            return {
                request: function (req) {
                    var token = session.token();
                    if (token) {
                        req.headers = req.headers || {};
                        req.headers.Authorization = 'Bearer ' + token;
                    }
                    return req;
                },
                requestError: function (res) {
                    return req;
                },
                response: function (res) {
                    return res;
                },
                responseError: function (res) {
                    if (res.status === 401) {
                        if (res.data.message === 'jwt expired') {
                            $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout);
                        }
                    }
                    return res;
                }
            };
        }];
});