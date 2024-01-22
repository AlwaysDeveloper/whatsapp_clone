import { DeleteRoute, GetRoute, PostRoute, PutRoute } from "@router";
import constants from "../constants/controller";

export default class Controller {
    service;
    constructor (service, routes) {
        this.service = service;
    }

    /**
     * 
     * @param { string } route 
     * @param { Function } handler 
     * @returns 
     */
    get = (route, handler) => new GetRoute(route, handler);

    /**
     * 
     * @param { string } route 
     * @param { Function } handler 
     * @returns 
     */
    post = (route, handler) => new PostRoute(route, handler);


    /**
     * 
     * @param { string } route 
     * @param { Function } handler 
     * @returns 
     */
    put = (route, handler) => new PutRoute(route, handler);

    /**
     * 
     * @param { string } route 
     * @param { Function } handler 
     * @returns 
     */
    delete = (route, handler) => new DeleteRoute(route, handler);

    response (result, message, onError) {
        return {
            type: constants.Return.RESPONSE,
            result,
            onSuccess: message,
            onError
        };
    }

    redirect (url, statusCode) {
        return {
            type: constants.Return.REDIRECT,
            code: statusCode,
            url
        }
    }
}