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
        ObjectId = Schema.Types.ObjectId,
        Now = Date.now,

        UserSchema = new Schema({
            username: {
                type: String,
                unique: true,
                index: true,
                required: true
            },
            email: {
                type: String,
                unique: true,
                index: true,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            role: {
                type: ObjectId,
                ref: 'Role'
            },
            createAt: {
                type: Date,
                default: Now
            },
            loginAt: {
                type: Date,
                default: Now
            },
            clientIp: {
                type: String,
                default: '0.0.0.0'
            },
            cookie: String
        });

    return UserSchema;
});
