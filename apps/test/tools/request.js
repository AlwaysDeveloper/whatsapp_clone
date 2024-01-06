export default class Request {
    /**
     * 
     * @param {{[string]: [string | object | Array | number | boolean]}} params 
     * @returns 
     */
    setBody(body) {
        this.body = body;
        return this;
    }

    /**
     * 
     * @param {{[string]: [string]}} params 
     * @returns 
     */
    setHeader(headers) {
        this.headers = headers;
        return this;
    }

    /**
     * 
     * @param {{[string]: [string]}} params 
     * @returns 
     */
    setParams(params) {
        this.params = params;
        return this;
    }

    /**
     * 
     * @param {{[string]: [string]}} params 
     * @returns 
     */
    setQuery(query){
        return this.query = query;
    }
}