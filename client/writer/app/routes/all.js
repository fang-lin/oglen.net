/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {
    'use strict';

    var routes = angular.module(config.name + '.routes', [])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/', {
                    controller: 'DashboardCtrl',
                    templateUrl: 'app/views/dashboard.html',
                    access: { requiredLogin: true }
                })
                .when('/login', {
                    controller: 'LoginCtrl',
                    templateUrl: 'app/views/login.html',
                    access: { requiredLogin: false }
                })
                .when('/logout', {
                    controller: 'LogoutCtrl',
                    templateUrl: 'app/views/logout.html',
                    access: { requiredLogin: true }
                })
                .when('/dashboard', {
                    controller: 'DashboardCtrl',
                    templateUrl: 'app/views/dashboard.html',
                    access: { requiredLogin: true }
                })
                .when('/posts/:skip?', {
                    controller: 'PostsCtrl',
                    templateUrl: 'app/views/posts.html',
                    access: { requiredLogin: true }
                })
                .when('/post/:id?', {
                    controller: 'PostCtrl',
                    templateUrl: 'app/views/post.html',
                    access: { requiredLogin: true }
                })
                .when('/tags/:skip?', {
                    controller: 'TagsCtrl',
                    templateUrl: 'app/views/tags.html',
                    access: { requiredLogin: true }
                })
                .when('/tag/:id?', {
                    controller: 'TagCtrl',
                    templateUrl: 'app/views/tag.html',
                    access: { requiredLogin: true }
                })
                .when('/comment/:id?', {
                    controller: 'CommentCtrl',
                    templateUrl: 'app/views/comment.html',
                    access: { requiredLogin: true }
                })
                .when('/comments/:skip?', {
                    controller: 'CommentsCtrl',
                    templateUrl: 'app/views/comments.html',
                    access: { requiredLogin: true }
                })
                .when('/users/:skip?', {
                    controller: 'UsersCtrl',
                    templateUrl: 'app/views/users.html',
                    access: { requiredLogin: true }
                })
                .when('/user/:id?', {
                    controller: 'UserCtrl',
                    templateUrl: 'app/views/user.html',
                    access: { requiredLogin: true }
                })
                .when('/roles/:skip?', {
                    controller: 'RolesCtrl',
                    templateUrl: 'app/views/roles.html',
                    access: { requiredLogin: true }
                })
                .when('/role/:id?', {
                    controller: 'RoleCtrl',
                    templateUrl: 'app/views/role.html',
                    access: { requiredLogin: true }
                })
                .when('/settings/:skip?', {
                    controller: 'SettingsCtrl',
                    templateUrl: 'app/views/settings.html',
                    access: { requiredLogin: true }
                })
                .when('/setting/:id?', {
                    controller: 'SettingCtrl',
                    templateUrl: 'app/views/setting.html',
                    access: { requiredLogin: true }
                })
                .otherwise({
                    redirectTo: '/'
                });

        }]);

    return routes;
});
