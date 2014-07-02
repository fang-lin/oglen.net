/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require([
    'config'
], function (config) {

    requirejs.config(config.requirejs);
    require([
        'bootstrap',
        'angular',
        'angular-route',
        'angular-animate',
        'angular-translate',
        'app'
    ], function () {

        angular.bootstrap(document, [config.name]);

    });
});




