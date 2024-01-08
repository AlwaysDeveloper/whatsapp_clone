import Respond from "../utils/Respond";

/**
 * 
 * @param {function} handler 
 * @param {string} onSuccess 
 * @param {string} onError 
 */
export default function Handler(handler, onSuccess, onError) {
    return async (req) => {
        try {
            const result = await handler(req);
            if(result instanceof Respond) {
                return {
                    Ok: {
                        message: result.onSuccess,
                        entity: result.result
                    }
                }
            }
            return {
                Ok: {
                    message: onSuccess,
                    entity: result
                }
            }
        } catch (error) {
            error.errorMessage = onError;
            return {
                Error: error
            }
        }
    }
}