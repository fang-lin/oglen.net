/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema;

    // Define User schema
    var PostSchema = new Schema({

    });

    var User = mongoose.model('User', PostSchema);

});