/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['$resource', function ($resource) {

        var Tags = $resource('../rest/tags/:skip/:limit', null, {
            'get': { method: 'GET' }
        });

        Tags.count = $resource('../rest/tags/count', null, {
            get: {method: 'GET'}
        });

        return Tags;
    }];
});
