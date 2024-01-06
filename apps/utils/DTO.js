import ApiError from '@utils/errors/apierror';

export default function DTO(req) {
    if(!req && !req.body) {
        throw new ApiError(500, 'no valid source!');
    }
    const source = req.body || req;
    
    return (object) => {
        Object
            .keys(object)
            .forEach((key) => {
                object[key] = source[key]
            });
    }
}