/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'app-config',
    'resources/Post',
    'resources/Posts',
    'resources/Tag',
    'resources/Tags',
    'resources/Role',
    'resources/Roles',
    'resources/User',
    'resources/Users',
    'resources/Setting',
    'resources/Settings',
    'angular',
    'angular-resource'
], function (config, Post, Posts, Tag, Tags, Role, Roles, User, Users, Setting, Settings) {

    var resources = angular.module(config.name + '.resources', ['ngResource'])
        .factory('Post', Post)
        .factory('Posts', Posts)
        .factory('Tag', Tag)
        .factory('Tags', Tags)
        .factory('Role', Role)
        .factory('Roles', Roles)
        .factory('User', User)
        .factory('Users', Users)
        .factory('Setting', Setting)
        .factory('Settings', Settings);

    return resources;
});