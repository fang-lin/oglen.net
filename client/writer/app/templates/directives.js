/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/menuDirective',
    'directives/dialogDirective',
    'directives/dropdownDirective',
    'angular'
], function (config, menu, dialog, dropdown) {

    var directives = angular.module(config.name + '.directives', [])
        .directive('menu', menu)
        .directive('dialog', dialog)
        .directive('dropdown', dropdown);

    return directives;
});