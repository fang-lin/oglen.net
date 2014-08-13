/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {

    var routes = angular.module(config.name + '.routes', []).config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'app/views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/posts', {
                templateUrl: 'app/views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/post/:id', {
                templateUrl: 'app/views/post.html',
                controller: 'PostCtrl'
            })
            .when('/post', {
                templateUrl: 'app/views/post.html',
                controller: 'PostCtrl'
            })
            .when('/tags', {
                templateUrl: 'app/views/tags.html',
                controller: 'TagsCtrl'
            })
            .when('/tag', {
                templateUrl: 'app/views/tag.html',
                controller: 'TagCtrl'
            })
            .when('/comments', {
                templateUrl: 'app/views/comments.html',
                controller: 'CommentsCtrl'
            })
            .when('/users', {
                templateUrl: 'app/views/users.html',
                controller: 'UsersCtrl'
            })
            .when('/user/:userId', {
                templateUrl: 'app/views/user.html',
                controller: 'UserCtrl'
            })
            .when('/user', {
                templateUrl: 'app/views/user.html',
                controller: 'UserCtrl'
            })
            .when('/settings', {
                templateUrl: 'app/views/settings.html',
                controller: 'SettingsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);

    return routes;
});
