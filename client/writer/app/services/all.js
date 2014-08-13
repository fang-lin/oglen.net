/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/mainMenu',
    'services/siteConfig',
    'services/Post',
    'services/Posts',
    'services/Tag',
    'services/Tags',
    'services/User',
    'angular',
    'angular-resource'
], function (config, mainMenu, siteConfig, Post, Posts, Tag, Tags, User) {

    var services = angular.module(config.name + '.services', ['ngResource'])
        .constant('mainMenu', mainMenu)
        .constant('siteConfig', siteConfig)
        .factory('Post', Post)
        .factory('Posts', Posts)
        .factory('Tag', Tag)
        .factory('Tags', Tags)
        .factory('User', User);

    return services;
});