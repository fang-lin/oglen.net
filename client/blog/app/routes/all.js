/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {
    'use strict';

    var routes = angular.module(config.name + '.routes', []).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/index.html',
                controller: 'IndexCtrl'
            })
            .when('/catalog', {
                templateUrl: 'app/views/catalog.html',
                controller: 'CatalogCtrl'
            })
            .when('/post/:skip?', {
                templateUrl: 'app/views/posts.html',
                controller: 'PostCtrl'
            })
            .when('/about', {
                templateUrl: 'app/views/post.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
    return routes;
});
