/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {

    var routes = angular.module(config.name + '.routes', []).config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController'
            }).
            when('/home', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController'
            }).
            when('/posts', {
                templateUrl: 'app/views/posts.html',
                controller: 'PostsController'
            }).
            when('/comments', {
                templateUrl: 'app/views/comments.html',
                controller: 'PostsController'
            }).
            when('/users', {
                templateUrl: 'app/views/users.html',
                controller: 'UsersController'
            }).
            when('/settings', {
                templateUrl: 'app/views/settings.html',
                controller: 'SettingsController'
            }).
            otherwise({
                redirectTo: '/'
            });

    }]);

    return routes;
});
