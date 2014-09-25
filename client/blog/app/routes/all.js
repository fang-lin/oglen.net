/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {
    'use strict';

    var routes = angular.module(config.name + '.routes', [])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
//                $locationProvider.html5Mode(true);
//                $routeProvider
//                    .when('/catalog', {
//                        templateUrl: 'app/views/catalog.html',
//                        controller: 'CatalogCtrl'
//                    })
//                    .when('/post/:id/:skip?/:limit?', {
//                        templateUrl: 'app/views/post.html',
//                        controller: 'PostCtrl'
//                    })
//                    .when('/about', {
//                        templateUrl: 'app/views/about.html',
//                        controller: 'AboutCtrl'
//                    })
//                    .when('/:skip?/:limit?', {
//                        templateUrl: 'app/views/posts.html',
//                        controller: 'PostsCtrl'
//                    })
//                    .otherwise({
//                        redirectTo: '/'
//                    });

                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('/catalog', {
                        url: "/state1",
                        templateUrl: 'app/views/catalog.html',
                        controller: 'CatalogCtrl'
                    })
                    .state('/post/:id/:skip?/:limit?', {
                        templateUrl: 'app/views/post.html',
                        controller: 'PostCtrl'
                    })
                    .state('/about', {
                        templateUrl: 'app/views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .state('/:skip?/:limit?', {
                        templateUrl: 'app/views/posts.html',
                        controller: 'PostsCtrl'
                    });
            }]);
    return routes;
});
