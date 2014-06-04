/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {

    angular.module(config.name + '.routes', []).config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'app/templates/home.html',
            controller: 'HomeController'
        }).when('/posts', {
            templateUrl: 'app/templates/posts.html',
            controller: 'PostsController'
        }).when('/comments', {
            templateUrl: 'app/templates/comments.html',
            controller: 'PostsController'
        }).when('/users', {
            templateUrl: 'app/templates/users.html',
            controller: 'UsersController'
        }).when('/settings', {
            templateUrl: 'app/templates/settings.html',
            controller: 'SettingsController'
        });
    }]);
});
