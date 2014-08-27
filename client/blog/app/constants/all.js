/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'constants/menu',
    'constants/info',
    'angular'
], function (config, menu, info) {
    'use strict';

    var constants = angular.module(config.name + '.constants', [])
        .constant('menu', menu)
        .constant('info', info);

    return constants;
});