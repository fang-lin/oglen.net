/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    return ['$resource', function ($resource) {

        var Draft = $resource('../rest/draft/:id', {id: '@id'});

        Draft.default = function () {
            return {
                _postId: 'Default Title',
                text: 'Default Text',
                data: 'Default Data',
                flag: 'Default Flag'
            };
        };

        return Draft;
    }];
});