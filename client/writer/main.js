/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

requirejs.config({
    paths: {
        // Libs
        'jquery': '/libs/jquery/dist/jquery',
        'underscore': '/libs/underscore/underscore',
        'angular': '/libs/angular/angular',
        'angular-resource': '/libs/angular-resource/angular-resource',
        'angular-route': '/libs/angular-route/angular-route',
        'angular-animate': '/libs/angular-animate/angular-animate',
        'angular-translate': '/libs/angular-translate/angular-translate',
        // Apps
        'config': 'config',
        'app': 'app/app',
        'controllers': 'app/controllers',
        'routes': 'app/routes',
        'directives': 'app/directives',
        'filters': 'app/filters',
        'services': 'app/services'
    },
    shim: {
        angular: {
            deps: ['jquery']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-translate': {
            deps: ['angular']
        }
    }
});

require([
    'config',
    'angular',
    'angular-route',
    'angular-animate',
    'angular-translate',
    'app'
], function (config) {

    angular.bootstrap(document, [config.name]);

});
