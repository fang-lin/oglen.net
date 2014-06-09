/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/ogMenu',
    'directives/ogDialog',
    'directives/ogDropdown',
    'directives/ogWysiwyg',
    'angular'
], function (config, ogMainmenu, ogDialog, ogDropdown, ogWysiwyg) {

    var directives = angular.module(config.name + '.directives', [])
        .directive('ogMenu', ogMainmenu)
        .directive('ogDialog', ogDialog)
        .directive('ogDropdown', ogDropdown)
        .directive('ogWysiwyg', ogWysiwyg);

    return directives;
});