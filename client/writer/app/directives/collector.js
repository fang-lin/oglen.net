/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/ogMainNav',
    'directives/ogDialog',
    'directives/ogDropdown',
    'angular'
], function (config, ogMainNav, ogDialog, ogDropdown) {

    var directives = angular.module(config.name + '.directives', [])
        .directive('ogMainNav', ogMainNav)
        .directive('ogDialog', ogDialog)
        .directive('ogDropdown', ogDropdown);

    return directives;
});