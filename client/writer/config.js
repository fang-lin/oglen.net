/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {

    return {
        'requirejs': {
            paths: {
                // Libs
                'jquery': '/bowers/jquery/dist/jquery',
                'underscore': '/bowers/underscore/underscore',
                'bootstrap': '/bowers/bootstrap/dist/js/bootstrap',
//                'tinymce': '/bowers/tinymce/tinymce.min',
                'angular': '/bowers/angular/angular',
                'angular-resource': '/bowers/angular-resource/angular-resource',
                'angular-route': '/bowers/angular-route/angular-route',
                'angular-animate': '/bowers/angular-animate/angular-animate',
                'angular-translate': '/bowers/angular-translate/angular-translate',
//                'angular-ui-tinymce': '/bowers/angular-ui-tinymce/src/tinymce',
                // Apps
                'config': 'config',
                'app': 'app/app',
                'controllers': 'app/controllers',
                'routes': 'app/routes',
                'directives': 'app/directives',
                'filters': 'app/filters',
                'resources': 'app/resources',
                'constants': 'app/constants'
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