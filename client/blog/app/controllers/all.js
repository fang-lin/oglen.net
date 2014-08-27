/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/DashboardCtrl',
    'angular'
], function (config, DashboardCtrl) {
    'use strict';

    var controllers = angular.module(config.name + '.controllers', [])
        .controller('DashboardCtrl', DashboardCtrl)

    return controllers;
});