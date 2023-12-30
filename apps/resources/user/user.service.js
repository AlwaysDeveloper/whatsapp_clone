import UserRepository from "@repositories/UserRepository";
import JWTSign from "@common/JWT";

export default class UserService {
    /**
     * 
     * @param {UserRepository} userRepository 
     */
    constructor(userRepository) { 
        this.userRepository = userRepository;
    }

    async create(user) {
        const newUser = await this.userRepository.create(user);
        const token = JWTSign.sign({ id: newUser.exId, userRole: newUser.user_role });
        return { ...newUser, token };
    }

    async findByMsnId(msnId) {
        return this.userRepository.findBymsnid(msnId);
    }
}
