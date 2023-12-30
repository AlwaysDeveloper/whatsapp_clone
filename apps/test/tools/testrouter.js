let app;

class MockRoute {
    #pipeline;
    constructor(method, route) {
        if (!app[method]) {
            throw new Error('Mock app is not initialized yet.');
        } else if (!app[method][route]) {
            throw new Error(`${method}(${route}) not found!`);
        }
        this.#pipeline = app[method][route];
    }

    #createPipeline(middlewares = []) {
        middlewares.forEach((fn) => {
            (reqOrError, res, next) => {
                if (reqOrError instanceof Error) {

                } else { }
            }
        });
    }

    execute() { }
}

class TestGetRoute extends MockRoute {
    constructor(route) {
        super('get', route);
    }
}
/**
 * 
 * @param {import MockApp from "./mockapp";} app 
 */
export default function TestRouter(mockApp) {
    app = mockApp;
}