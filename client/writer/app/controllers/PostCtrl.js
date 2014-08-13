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
        function ($rootScope, $scope, $interval, $routeParams, Post) {
            var id = $routeParams.id;

            if (id) {

                $scope.post = Post.get({id: id});

            } else {

                $scope.post = {
                    title: 'Default Title',
                    abstract: 'Default Abstract',
                    author: '53eb365dc22341f81f624b39',
                    tags: null,
                    body: null
                };
            }

            $scope.submit = function () {

                event.preventDefault();

                if ($scope.post._id) {

                    Post.update($scope.post, function (post) {
                        $scope.post = post;
                    });

                } else {
                    Post.save($scope.post, function (post) {
                        $scope.post = post;
                    });
                }
            }
        }];
});