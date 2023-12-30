import { QueryTypes } from 'sequelize';

export default class Repository {
    constructor(model) {
        Object.assign(this, model);
        this.#defineMethods(model);
    }

    #defineMethods(model) {
        const attributes = this.rawAttributes;
        Object
            .keys(attributes)
            .forEach(key => {
                if (['createdat', 'updatedat'].includes(key.toLocaleLowerCase())) { return }
                this[`findBy${key}`] = (value, options = {}) => {
                    const { where, ...attributes } = options;
                    return model.findOne({ where: { ...where, [key]: value }, ...attributes });
                }
            });

        this.create = model.create;
        this.findAll = model.findAll;
        this.update = model.update;
        this.delete = model.delete;
    }

    /**
     * 
     * @param {string} queryString 
     * @param {QueryTypes} queryType 
     * @param {Object} replacements 
     */
    query(queryString, queryType, replacements) {
        return this.sequelize.query(queryString, { type: queryType, replacements });
    }
}