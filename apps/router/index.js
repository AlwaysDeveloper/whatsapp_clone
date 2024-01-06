import AuthenticateToken from '@middleware/authenticate';
import AutoImport from './import';
import execute from './executor';

let application;

const defaultAuth = (req, res, next) => next();

class Route {
    _path;
    _method;
    #route = [];

    _checkPath() {
        if (!this._path || this._path === null) {
            throw new Error('path is required. example: /test');
        } else if (typeof this._path !== 'string') {
            throw new Error('path must be string like "/test"');
        }
    }

    secure(security = AuthenticateToken) {
        this.#route[0] = security;
        return this;
    }

    auth(authenticator = defaultAuth) {
        this.#route[1] = authenticator;
        return this;
    }

    addMiddleware(middleware) {
        this.#route.push(middleware);
        return this;
    }

    bind(handler) {
        this.#route.push(execute(handler));
        this._checkPath();
        switch (this._method) {
            case 'get':
                application.get(this._path, ...this.#route);
                break;
            case 'post':
                application.post(this._path, ...this.#route);
                break;
            case 'put':
                application.put(this._path, ...this.#route);
                break;
            case 'delete':
                application.delete(this._path, ...this.#route);
                break;
        }
    }
}

export class GetRoute extends Route {
    constructor(path) {
        super();
        this._path = path;
        this._method = 'get';
    }
}

export class PostRoute extends Route {
    constructor(path) {
        super();
        this._path = path;
        this._method = 'post';
    }
}

export class PutRoute extends Route {
    constructor(path) {
        super();
        this._path = path;
        this._method = 'put';
    }
}

export class DeleteRoute extends Route {
    constructor(path) {
        super();
        this._path = path;
        this._method = 'get';
    }
}

/**
 * @typedef {Object} ImportOption
 * @property {string[]} include
 * @property {string[]} load
 */

/**
 * 
 * @param {import('express').Application} app 
 * @param {ImportOption} importOption 
 * @returns {*} app
 */
export default function Router(app, importOption) {
    application = app;
    new AutoImport(importOption);
    return app;
}