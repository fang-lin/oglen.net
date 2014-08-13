/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    return ['$resource', function ($resource) {

        var Post = $resource('../rest/post/:id', null, {
            'save': {method: 'POST'},
            'update': { method: 'PUT' }
        });

        return Post;
    }];
});
