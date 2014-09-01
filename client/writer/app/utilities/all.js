/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'utilities/Pager',
    'utilities/Authorization',
    'utilities/Session',
    'utilities/path',
    'utilities/AuthorizationInterceptor',
    'angular'
], function (config, Pager, Authorization, Session, path, AuthorizationInterceptor) {
    'use strict';

    var utilities = angular.module(config.name + '.utilities', [])
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

    return utilities;
});