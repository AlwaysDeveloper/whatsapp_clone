import { Op } from "sequelize";
import sinon from "sinon";
import Repository from "../../models";

export class TestRepository {
    #name;
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

export class MockRepository {
    stubs;
    constructor (repository, implementations) {
        const prototype = repository.prototype;
        if(typeof prototype === "undefined"){
            throw new Error("Not a repository to mock.");
        }
        this.stubs = Object
        .keys(implementations)
        .map(key => {
            const stub = sinon.stub(prototype, key);
            stub.resolves(implementations[key]);
            return stub;
        });
    }

    restore() {
        this.stubs.forEach(stub => stub.restore());
    }
}
