/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/mainMenu',
    'services/extConfig',
    'angular'
], function (config, mainMenu, extConfig) {

    var services = angular.module(config.name + '.services', [])
        .constant('mainMenu', mainMenu)
        .constant('extConfig', extConfig);

    return services;
});