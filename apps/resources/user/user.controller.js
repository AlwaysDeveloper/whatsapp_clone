import UserRepository from "../../repositories/UserRepository";
import Respond from "../../utils/Respond";
import CreateUserDto from "./dtos/createUserDto";
import UserService from "./user.service";
export default class UserController {
    #service = new UserService(
        new UserRepository()
    );

    createUser = async (req) => {
        const result = await this.#service.create(new CreateUserDto(req));
        return new Respond(result, 'Successfully create a new test user for now.');
    }
}