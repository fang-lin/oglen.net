/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'utilities/Pager',
    'utilities/path',
    'angular'
], function (config, Pager, path) {
    'use strict';

    var utilities = angular.module(config.name + '.utilities', [])
        .service('pager', Pager)
        .run(path);

    return utilities;
});