/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    return ['$resource', function ($resource) {

        var User = $resource('../rest/user', null, {
            save: {method: 'POST'}
        });

        return User;
    }];
});
