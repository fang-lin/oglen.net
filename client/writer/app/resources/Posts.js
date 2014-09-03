/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'angular-resource'
], function () {
    'use strict';

    return ['resource', function (resource) {

        var Posts = resource('/rest/posts/:skip/:limit');
        Posts.count = resource('/rest/posts/count');

        return Posts;
    }];
});
