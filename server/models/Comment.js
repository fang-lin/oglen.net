/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose',
    'server/schemas/Comment'
], function (mongoose, CommentSchema) {
    'use strict';

    var Comment = mongoose.model('Comment', CommentSchema);

    return Comment;
});