/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/Pager',
    'services/Authorization',
    'services/Session',
    'services/path',
    'services/AuthorizationInterceptor',
    'angular',
    'angular-resource'
], function (config, Pager, Authorization, Session, path, AuthorizationInterceptor) {
    'use strict';

    var services = angular.module(config.name + '.services', ['ngResource'])
        .run(path)
        .factory('pager', Pager)
        .factory('authorization', Authorization)
        .factory('authorizationInterceptor', AuthorizationInterceptor)
        .factory('session', Session)
        .config([
            '$httpProvider',
            function ($httpProvider) {
                $httpProvider.interceptors.push('authorizationInterceptor');
            }]);

    return services;
});