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
        '$window',
        function ($rootScope, $location, $q, $window) {
            return {
                request: function (req) {
                    req.headers = req.headers || {};
                    if ($window.sessionStorage.token) {
                        req.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                    }
                    return req;
                },
                requestError: function (res) {
                    return req;
                },
                response: function (res) {

//                    if (res.status === 401) {
//                        // handle the case where the user is not authenticated
//
//                    }
                    return res || $q.when(res);
                },
                responseError: function (res) {
                    if (res.status === 401) {
                        // handle the case where the user is not authenticated
                        $location.path('/login');
                    }
                    return $q.reject(res);
                }
            };
        }];
});