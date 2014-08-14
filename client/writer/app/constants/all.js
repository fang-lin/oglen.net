/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'app-config',
    'constants/Menu',
    'constants/Info',
    'angular'
], function (config, Menu, Info) {

    var constants = angular.module(config.name + '.constants', [])
        .constant('Menu', Menu)
        .constant('Info', Info);

    return constants;
});