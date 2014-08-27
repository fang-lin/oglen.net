/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/ogMenu',
    'angular'
], function (config, ogMenu) {
    'use strict';

    var directives = angular.module(config.name + '.directives', [])
        .directive('ogMenu', ogMenu);

    return directives;
});