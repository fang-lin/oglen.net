/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'log4js'
], function (config, log4js) {

    var logger = log4js.getLogger('router'); // TRACE, DEBUG, INFO, WARN, ERROR, FATAL
    logger.setLevel(config.logLevel);

    function Router(expressRouter) {
        this.expressRouter = expressRouter;
    }

    Router.prototype.callback = [];

    Router.prototype.all = function (fn) {
        this.callback.push(fn);
        return this;
    };

    Router.prototype.when = function (path, route) {
        var router = this.expressRouter.route(path);
        router.cap = this.cap;
        this.callback.forEach(function (fn) {
            fn(router, route)
        });
        route.action(router);
        return this;
    };

    Router.prototype.cap = function (err, res, callback) {
        if (err) {
            logger.error(err);
            res.status(500).send({
                code: err.code,
                msg: err.message
            });
        } else {
            callback(logger);
        }
    };

    return function (expressRouter) {
        return new Router(expressRouter);
    };

});