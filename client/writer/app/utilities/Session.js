/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$window',
        function ($window) {

            var self = this;
            this.token = null;

            this.create = function (token) {
                self.token = $window.sessionStorage.token = token;
            };

            this.isActive = function () {
                return !!self.token;
            };

            this.destroy = function () {
                delete $window.sessionStorage.token;
                self.token = null;
            };
        }];
});