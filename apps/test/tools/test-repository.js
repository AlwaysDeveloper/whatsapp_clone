import { Op } from "sequelize";

export default class TestRepository {
    #baseRepository;
    #toClean = [];
    constructor(repository) {
        this.#baseRepository = repository;
        this.find = this.#baseRepository.find;
        this.update = this.#baseRepository.update;
        this.delete = this.#baseRepository.delete;
        this.query = this.#baseRepository.query;
    }

    async create(records, options = null) {
        const result = await this.#baseRepository.create(records, options);
        if(Array.isArray(result)) {
            result.forEach(item => this.#toClean.push(item.id));
        }else {
            this.#toClean.push(result.id);
        }
        return result;
    }

    async clean () {
        await this.#baseRepository.delete({where: { id: { [Op.in]: this.#toClean } }});
    }
}

