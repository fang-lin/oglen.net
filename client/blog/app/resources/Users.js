/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['$resource', function ($resource) {

        var Users = $resource('../rest/users/:skip/:limit', null, {
            'get': { method: 'GET' }
        });

        Users.count = $resource('../rest/users/count', null, {
            get: {method: 'GET'}
        });

        return Users;
    }];
});
