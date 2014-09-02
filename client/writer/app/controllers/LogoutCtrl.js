/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        'authorization',
        function ($rootScope, authorization) {

            if ($rootScope.isLogin) {
                authorization.logout();
            }
        }];
});