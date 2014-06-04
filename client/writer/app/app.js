/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'app/controllers/controllers',
    'app/routes/routes'
], function (config) {

    var name = config.name;
    angular.module(name, ['ngRoute', 'ngAnimate', name + '.controllers', name + '.routes']);
});