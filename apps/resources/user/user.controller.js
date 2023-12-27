import CreateUserDto from "./dtos/createUserDto";
import UserService from "./user.service";
import CreateUserValidation from "./validations/createUser.check";

export default class UserController {
    /**
     * 
     * @param {UserService} userService 
     */
    constructor(userService) { 
        this.service = userService;
    }

    async create(req) {
        const createUser = CreateUserValidation(new CreateUserDto(req));
        return this.service.create(createUser);
    }
}