/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require([
    'config' // requirejs config
], function () {
    'use strict';

    require([
        'app-config',
        'bootstrap',
        'angular',
        'app'
    ], function (config) {

        angular.bootstrap(document, [config.name]);
    });
});





