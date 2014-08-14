/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    return ['$resource', function ($resource) {

        var Roles = $resource('../rest/roles', null, {
            'save': {method: 'POST'},
            'update': { method: 'PUT' }
        });

        return Roles;
    }];
});
