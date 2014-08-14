/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    return ['$resource', function ($resource) {

        var Drafts = $resource('../rest/drafts/:postId', null);

        Drafts.default = function () {
            return {
                _postId: 'Default Title',
                text: 'Default Text',
                data: 'Default Data',
                flag: 'Default Flag'
            };
        };

        return Drafts;
    }];
});