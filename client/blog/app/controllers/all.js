/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/IndexCtrl',
    'controllers/CatalogCtrl',
    'controllers/PostCtrl',
    'controllers/AboutCtrl',
    'angular'
], function (config, IndexCtrl, CatalogCtrl, PostCtrl, AboutCtrl) {
    'use strict';

    var controllers = angular.module(config.name + '.controllers', [])
        .controller('IndexCtrl', IndexCtrl)
        .controller('CatalogCtrl', CatalogCtrl)
        .controller('PostCtrl', PostCtrl)
        .controller('AboutCtrl', AboutCtrl);

    return controllers;
});