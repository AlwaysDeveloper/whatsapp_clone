import { GetRoute, PostRoute } from "../../lib/router";
import UserRepository from "../../repositories/UserRepository";
import response from "../../utils/response";
import CreateUserDto from "./dtos/createUserDto";
import UserService from "./user.service";
export default class UserController {
    constructor() {
        this.service = new UserService(
            new UserRepository()
        );
    }

    createUser = new PostRoute('/v1/user/create', async (req) => {
        const result = await this.service.create(new CreateUserDto(req));
        return response(result, 'Successfully create a new test user for now.');
    });

    getUser = new GetRoute('/v/user/:msid/find', (req) => this.service.findByMsnId(req.params.msid)).secure();
}