import { Op } from "sequelize";
import Repository from "../../models";

export default class TestRepository {
    #name;
    #baseRepository;
    #toClean = [];
    #definations = false;
    constructor(repository) {
        this.#baseRepository = repository;
        if(!(repository instanceof Repository)) {
            this.#definations = true;
        }
        this.#map();
    }

    #map() {
        Object.keys(this.#baseRepository)
            .forEach(key => {
                this[key] = this.#definations ? () => Promise.resolve(this.#baseRepository[key]) : this.#baseRepository[key];
            });
    }

    async create(records, options = null) {
        if(this.#definations) {
            return Promise.resolve(this.#baseRepository.create);
        }
        const result = await this.#baseRepository.create(records, options);
        if(Array.isArray(result)) {
            result.forEach(item => this.#toClean.push(item.id));
        }else {
            this.#toClean.push(result.id);
        }
        return result;
    }
    
    async clean () {
        console.log(`Cleaning insert ids: ${this.#toClean.join(',')} of ${this.#name}`);
        const result = await this.#baseRepository.delete({where: { id: { [Op.in]: this.#toClean } }, isForever: true});
    }
}