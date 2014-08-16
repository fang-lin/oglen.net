/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'underscore'
], function (_) {

    return [
        '$rootScope',
        '$scope',
        '$interval',
        '$routeParams',
        '$location',
        'Post',
        'Tags',
        'Drafts',
        'Draft',
        function ($rootScope, $scope, $interval, $routeParams, $location, Post, Tags, Drafts, Draft) {
            var id = $routeParams.id;

            if (id) {
                // edit
                $scope.post = Post.get({id: id});
                $scope.drafts = Drafts.query({postId: id, short: true});
            } else {
                // add
                $scope.post = {
                    title: 'Default Title',
                    abstract: 'Default Abstract',
                    author: '53eb365dc22341f81f624b39',
                    tags: [],
                    draft: {}
                };

                $scope.drafts = [];
            }

            $scope.tags = Tags.query();

            $scope.submit = function () {
                event.preventDefault();

                var $post = $scope.post;

                $post.tags = _.compact($post.tags);
                $post.draft = {
                    text: $post.draft.text
                };

                if ($post._id) {
                    // update existing post
                    $scope.drafts = Drafts.query({postId: $post._id});

                    Post.update($post, function (post) {
                        $post.draft._id = post.draft._id;
                        $post.draft.saveAt = post.draft.saveAt;

                        // todo: alert success.
                    });
                } else {
                    // create new post
                    Post.save($post, function (post) {
                        $post._id = post._id;
                        $post.createAt = post.createAt;
                        $post.draft._id = post.draft._id;
                        $post.draft.saveAt = post.draft.saveAt;

                        $scope.drafts = Drafts.query({postId: $post._id});

                        var path = $location.path;
                        path(path() + $post._id, false);
                    });
                }
            };

            $scope.setDraft = function (id) {
                event.preventDefault();

                $scope.post.draft = Draft.get({id: id});
            }
        }
    ];
});