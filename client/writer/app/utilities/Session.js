/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$window',
        function ($window) {
            return {
                create: function (token) {
                    $window.sessionStorage.token = token;
                },
                isActive: function () {
                    return !!$window.sessionStorage.token;
                },
                token: function () {
                    return $window.sessionStorage.token;
                },
                destroy: function () {
                    delete $window.sessionStorage.token;
                }
            };
        }];
});