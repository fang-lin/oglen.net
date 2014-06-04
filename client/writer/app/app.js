/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'app/controllers/controllers'
], function (config) {

    var name = config.name;
    var app = angular.module(name, [
        'ngRoute',
        'ngAnimate',
        name + '.controllers'
    ]);

    /*,
    name + '.directives',
    name + '.filters',
    name + '.services'
    */

    console.log(app);
});