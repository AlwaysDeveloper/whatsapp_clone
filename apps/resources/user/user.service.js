import UserRepository from "@repositories/UserRepository";

export default class UserService {
    userRepository = new UserRepository();

    create(user) {
        return this.userRepository.create(user);
    }

    async findByMsnId(msnId) {
        return this.userRepository.findBymsnid(msnId);
    }
}
