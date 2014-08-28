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
    'utilities/authInterceptor',
    'angular'
], function (config, Pager, Authorization, Session, path, authInterceptor) {
    'use strict';

    var utilities = angular.module(config.name + '.utilities', [])
        .factory('pager', Pager)
        .factory('authorization', Authorization)
        .service('session', Session)
        .run(path)
        .factory('authInterceptor', authInterceptor)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('authInterceptor');
        });

    return utilities;
});