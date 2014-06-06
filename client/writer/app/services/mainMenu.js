/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    return [
        {
            name: 'Home',
            url: '#/home',
            children: [
                {
                    name: 'Dashboard',
                    url: '#/posts'
                }
            ]
        },
        {
            name: 'Posts',
            url: '#/posts',
            children: [
                {
                    name: 'Posts List',
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
                    name: 'Comments List',
                    url: '#/comments'
                }
            ]
        },
        {
            name: 'Users',
            url: '#/users',
            children: [
                {
                    name: 'Users List',
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
                    name: 'Options',
                    url: '#/settings'
                }
            ]
        }
    ];
});