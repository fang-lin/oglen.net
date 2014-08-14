/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([

], function () {

    return [
        '$rootScope',
        '$scope',
        '$interval',
        '$routeParams',
        'Post',
        'Tags',
        function ($rootScope, $scope, $interval, $routeParams, Post, Tags) {

            var id = $routeParams.id;

            $scope.tags = Tags.query();

            if (id) {

                $scope.post = Post.get({id: id});

            } else {

                $scope.post = {
                    title: 'Default Title',
                    abstract: 'Default Abstract',
                    author: '53eb365dc22341f81f624b39',
                    tags: [],
                    body: null
                };
            }

            $scope.submit = function () {

                event.preventDefault();

                var post = $scope.post;

                if (post._id) {

                    Post.update(post, function (post) {
                        $scope.post = post;
                    });

                } else {
                    post.tags = post.tags.map(function (tag) {
                        return tag;
                    });
                    Post.save(post, function (post) {
                        $scope.post = post;
                    });
                }
            }
        }];
});