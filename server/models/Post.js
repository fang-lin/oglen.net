/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose',
    'server/schemas/Post'
], function (mongoose, PostSchema) {
    'use strict';

    var Post = mongoose.model('Post', PostSchema);

    return Post;
});