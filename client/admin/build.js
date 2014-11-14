/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

requirejs.config({
    paths: {
        // Libs
        'jquery': 'lib/jquery/dist/jquery.min',
        'underscore': 'lib/underscore/underscore',
        'crypto': 'lib/crypto/crypto.min',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
        'angular': 'lib/angular/angular.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min',
        'angular-route': 'lib/angular-route/angular-route.min',
        'angular-animate': 'lib/angular-animate/angular-animate.min',
        'angular-translate': 'lib/angular-translate/angular-translate.min',
        // Apps
        'config': 'admin/app/config',
        'app': 'admin/app/app',
        'services': 'admin/app/services',
        'controllers': 'admin/app/controllers',
        'routes': 'admin/app/routes',
        'directives': 'admin/app/directives',
        'filters': 'admin/app/filters',
        'resources': 'admin/app/resources',
        'constants': 'admin/app/constants'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
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