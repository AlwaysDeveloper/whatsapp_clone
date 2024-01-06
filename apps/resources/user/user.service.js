import UserRepository from "@repositories/UserRepository";
import JWTSign from "@common/JWT";
import CreateUserValidation from "./validations/createUser.check";

export default class UserService {
    /**
     * 
     * @param {UserRepository} userRepository 
     */
    constructor(userRepository) { 
        this.userRepository = userRepository;
    }

    async create(user) {
        CreateUserValidation(user);
        const newUser = await this.userRepository.create(user);
        const token = JWTSign({ id: newUser.exId, userRole: newUser.user_role });
        return { ...newUser, token };
    }

    async findByMsnId(msnId) {
        return this.userRepository.findBymsnid(msnId);
    }
}
