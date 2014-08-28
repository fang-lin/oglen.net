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
                controller: 'DashboardCtrl',
                templateUrl: 'app/views/dashboard.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                templateUrl: 'app/views/login.html'
            })
            .when('/logout', {
                controller: 'LogoutCtrl',
                templateUrl: 'app/views/logout.html'
            })
            .when('/dashboard', {
                controller: 'DashboardCtrl',
                templateUrl: 'app/views/dashboard.html'
            })
            .when('/posts/:skip?', {
                controller: 'PostsCtrl',
                templateUrl: 'app/views/posts.html'
            })
            .when('/post/:id?', {
                controller: 'PostCtrl',
                templateUrl: 'app/views/post.html'
            })
            .when('/tags/:skip?', {
                controller: 'TagsCtrl',
                templateUrl: 'app/views/tags.html'
            })
            .when('/tag/:id?', {
                controller: 'TagCtrl',
                templateUrl: 'app/views/tag.html'
            })
            .when('/comment/:id?', {
                controller: 'CommentCtrl',
                templateUrl: 'app/views/comment.html'
            })
            .when('/comments/:skip?', {
                controller: 'CommentsCtrl',
                templateUrl: 'app/views/comments.html'
            })
            .when('/users/:skip?', {
                templateUrl: 'app/views/users.html',
                controller: 'UsersCtrl'
            })
            .when('/user/:id?', {
                controller: 'UserCtrl',
                templateUrl: 'app/views/user.html'
            })
            .when('/roles/:skip?', {
                controller: 'RolesCtrl',
                templateUrl: 'app/views/roles.html'
            })
            .when('/role/:id?', {
                controller: 'RoleCtrl',
                templateUrl: 'app/views/role.html'
            })
            .when('/settings/:skip?', {
                controller: 'SettingsCtrl',
                templateUrl: 'app/views/settings.html'
            })
            .when('/setting/:id?', {
                controller: 'SettingCtrl',
                templateUrl: 'app/views/setting.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);

    return routes;
});
