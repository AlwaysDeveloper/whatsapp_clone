const executor = (handler) => {
    if (typeof handler !== 'function') {
        throw new Error('not a function');
    }
    return async (req, res, next) => {
        const result = await handler(req);
        if (result.Error) { next(result.Error); }
        res.status(200);
        res.json(result.Ok);
    }
}

export default executor;