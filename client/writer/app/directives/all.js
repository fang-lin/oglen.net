/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/menuDir',
    'directives/dialogDir',
    'directives/dropdownDir',
    'angular'
], function (config, menuDir, dialogDir, dropdownDir) {
    'use strict';

    var directives = angular.module(config.name + '.directives', [])
        .directive('menu', menuDir)
        .directive('dialog', dialogDir)
        .directive('dropdown', dropdownDir);

    return directives;
});