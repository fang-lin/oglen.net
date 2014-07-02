/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/mainNav',
    'services/siteConfig',
    'angular'
], function (config, mainNav, siteConfig) {

    var services = angular.module(config.name + '.services', [])
        .constant('mainNav', mainNav)
        .constant('siteConfig', siteConfig);

    return services;
});