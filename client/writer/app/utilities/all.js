/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'utilities/Pager',
    'utilities/Authorization',
    'utilities/path',
    'angular'
], function (config, Pager, Authorization, path) {
    'use strict';

    var utilities = angular.module(config.name + '.utilities', [])
        .factory('pager', Pager)
        .factory('authorization', Authorization)
        .run(path);

    return utilities;
});