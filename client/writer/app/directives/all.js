/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/ogMenu',
    'directives/ogDialog',
    'directives/ogDropdown',
    'angular'
], function (config, ogMenu, ogDialog, ogDropdown) {

    var directives = angular.module(config.name + '.directives', [])
        .directive('ogMenu', ogMenu)
        .directive('ogDialog', ogDialog)
        .directive('ogDropdown', ogDropdown);

    return directives;
});