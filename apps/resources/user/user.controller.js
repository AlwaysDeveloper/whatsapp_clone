import UserRepository from "../../repositories/UserRepository";
import CreateUserDto from "./dtos/createUserDto";
import UserService from "./user.service";
export default class UserController {
    #service = new UserService(
        new UserRepository()
    );

    createUser = (req) => this.#service.create(new CreateUserDto(req));
}