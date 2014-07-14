/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-25.
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema;

    // Define User schema
    var User = new Schema({
        email: String,
        name: String,
        salt: String,
        password: String
    });

    return mongoose.model('User', User);
});

db.createUser(
    {
        user: "root",
        pwd: "swift",
        roles: [
            { role: "read", db: "reporting" },
            { role: "read", db: "products" },
            { role: "read", db: "sales" }
        ]
    }
)
