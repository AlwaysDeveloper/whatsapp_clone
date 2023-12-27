import ApiError from '@utils/errors/apierror';

export default class DTO {
    constructor(req) {
        this._source = req;
        this._map();
    }

    _map() {
        if (!this._source && !this._source.body) {
            throw new ApiError(500, 'no valid source!');
        }
        const source = this._source.body || this._source;
        Object
            .keys(this)
            .forEach((key) => {
                this[key] = source[key]
            });
    }
}