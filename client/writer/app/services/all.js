/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/resourceFactory',
    'services/pagerFactory',
    'services/encryptFactory',
    'services/authorizationFactory',
    'services/sessionFactory',
    'services/path',
    'services/authorizationInterceptorFactory',
    'angular',
    'angular-resource'
], function (config, resourceFactory, pagerFactory, encryptFactory, authorizationFactory, sessionFactory, path, authorizationInterceptorFactory) {
    'use strict';

    var services = angular.module(config.name + '.services', ['ngResource'])
        .factory('resource', resourceFactory)
        .factory('pager', pagerFactory)
        .factory('encrypt', encryptFactory)
        .factory('authorization', authorizationFactory)
        .factory('authorizationInterceptor', authorizationInterceptorFactory)
        .factory('session', sessionFactory)
        .config([
            '$httpProvider',
            function ($httpProvider) {
                $httpProvider.interceptors.push('authorizationInterceptor');

            }])
        .run(path);

    return services;
});