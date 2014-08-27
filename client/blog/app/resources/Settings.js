/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['$resource', function ($resource) {

        var Settings = $resource('../rest/settings/:skip/:limit', null, {
            'save': {method: 'POST'},
            'update': { method: 'PUT' }
        });

        Settings.count = $resource('../rest/settings/count', null, {
            get: {method: 'GET'}
        });

        return Settings;
    }];
});
