/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {

    return {
        'requirejs': {
            paths: {
                // Libs
                'jquery': '/vendor/jquery/dist/jquery',
                'underscore': '/vendor/underscore/underscore',
                'bootstrap': '/vendor/bootstrap/dist/js/bootstrap',
//                'tinymce': '/vendor/tinymce/tinymce.min',
                'angular': '/vendor/angular/angular',
                'angular-resource': '/vendor/angular-resource/angular-resource',
                'angular-route': '/vendor/angular-route/angular-route',
                'angular-animate': '/vendor/angular-animate/angular-animate',
                'angular-translate': '/vendor/angular-translate/angular-translate',
//                'angular-ui-tinymce': '/vendor/angular-ui-tinymce/src/tinymce',
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
//                'angular-ui-tinymce': {
//                    deps: ['angular', 'tinymce']
//                }
            }
        },
        'name': 'writer.oglen.net',
        'debug': true
    }
});