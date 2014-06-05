/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'routes/routes',
    'controllers/controllers',
    'directives/directives',
    'filters/filters'
], function (config) {

    var name = config.name;
    angular.module(name, [
        'ngRoute',
        'ngAnimate',
            name + '.routes',
            name + '.controllers',
            name + '.directives',
            name + '.filters'
    ]);
});