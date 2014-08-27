/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['$resource', function ($resource) {

        var Draft = $resource('../rest/draft/:id');

//        Draft.default = function () {
//            return {
//                _postId: 'Default Title',
//                text: 'Default Text',
//                data: 'Default Data',
//                flag: 'Default Flag'
//            };
//        };

        return Draft;
    }];
});