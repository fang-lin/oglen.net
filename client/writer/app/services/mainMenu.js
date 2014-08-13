/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    return [
        {
            name: 'Home',
            url: null,
            children: [
                {
                    name: 'Dashboard',
                    url: '#/dashboard'
                }
            ]
        },
        {
            name: 'Posts',
            url: null,
            children: [
                {
                    name: 'Posts List',
                    url: '#/posts'
                },
                {
                    name: 'Add Post',
                    url: '#/post/'
                },
                {
                    name: 'Tags',
                    url: '#/tags'
                },
                {
                    name: 'Add Tag',
                    url: '#/tag'
                }
            ]
        },
        {
            name: 'Comments',
            url: null,
            children: [
                {
                    name: 'Comments List',
                    url: '#/comments'
                }
            ]
        },
        {
            name: 'Users',
            url: null,
            children: [
                {
                    name: 'Users List',
                    url: '#/users'
                },
                {
                    name: 'Add User',
                    url: '#/user'
                }
            ]
        },
        {
            name: 'Settings',
            url: null,
            children: [
                {
                    name: 'Options',
                    url: '#/options'
                }
            ]
        }
    ];
});