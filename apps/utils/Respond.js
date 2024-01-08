export default class Respond {
    /**
     * 
     * @param { Object } result 
     * @param { string } successMessage
     */ 
    constructor(result, message) {
        this.result = result;
        this.onSuccess = message;
    }
}