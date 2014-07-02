/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/mainMenu',
    'services/siteConfig',
    'angular'
], function (config, mainMenu, siteConfig) {

    var services = angular.module(config.name + '.services', [])
        .constant('mainMenu', mainMenu)
        .constant('siteConfig', siteConfig);

    return services;
});