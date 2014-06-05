/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'routes/routes',
    'controllers/controllers',
    'directives/directives',
    'filters/filters'
], function (config) {

    var name = config.name;
    angular.module(name, [
        'ngRoute',
        'ngAnimate',
            name + '.routes',
            name + '.controllers',
            name + '.directives',
            name + '.filters'
    ]).constant('mainMenu', [
        {
            name: 'Home',
            url: '#/home'
        },
        {
            name: 'Posts',
            url: '#/posts',
            children: [
                {
                    name: 'Posts Edit',
                    url: '#/posts'
                },
                {
                    name: 'Add Post',
                    url: '#/posts'
                },
                {
                    name: 'Categories',
                    url: '#/posts'
                }
            ]
        },
        {
            name: 'Comments',
            url: '#/comments',
            children: [
                {
                    name: 'Comments',
                    url: '#/comments'
                }
            ]
        },
        {
            name: 'Users',
            url: '#/users',
            children: [
                {
                    name: 'Users Edit',
                    url: '#/users'
                },
                {
                    name: 'Add Users',
                    url: '#/users'
                }
            ]
        },
        {
            name: 'Settings',
            url: '#/settings',
            children: [
                {
                    name: 'Settings',
                    url: '#/settings'
                }
            ]
        }
    ]);
});