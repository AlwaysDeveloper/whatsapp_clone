import Controller from "../../utils/controller";
import { GetRoute, PostRoute } from "../../lib/router";
import response from "../../utils/response";
import CreateUserDto from "./dtos/createUserDto";
import UserService from "./user.service";
import Authorization from "../../middleware/authorization";
import enums from "../../constants/enums";
export default class UserController extends Controller{
    constructor() {
        super();
        this.service = new UserService();
    }

    create = new PostRoute('/v1/user/create', async (req) => {
        const result = await this.service.create(new CreateUserDto(req));
        return response(result, 'Successfully create a new test user for now.');
    });

    check = this.get('/v1/user/check', async(req) => {
        return true;
    }).secure().auth(Authorization(enums.userRole.user));
}