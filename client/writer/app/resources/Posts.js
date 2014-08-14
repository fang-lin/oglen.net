/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'angular-resource'
], function () {
    return ['$resource', function ($resource) {
        var Posts = $resource('../rest/posts', null, {
            get: {method: 'GET'}
        });

        return Posts;
    }];
});
