/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-25.
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema,

        UserSchema = new Schema({
            username: {
                type: String,
                unique: true,
                index: true
            },
            email: {
                type: String,
                unique: true,
                index: true
            },
            password: String
        });

    return UserSchema;
});
