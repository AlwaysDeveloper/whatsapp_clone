import Controller from "../../utils/controller";
import response from "../../utils/response";
import CreateUserDto from "./dtos/createUserDto";
import UserService from "./user.service";
import Authorization from "../../middleware/authorization";
import enums from "../../constants/enums";
import UserLoginCredentialsDto from "./dtos/user-login.dto";
import ValidateForOtherServicesDto from "./dtos/validate-for-other-service.dto";
export default class UserController extends Controller{
    constructor() {
        super();
        this.service = new UserService();
    }

    create = this.post('/v1/user/create', async (req) => {
        const result = await this.service.create(new CreateUserDto(req));
        return this.response(result, 'Successfully create a new test user for now.');
    });

    login = this.post('/v1/user/login', async(req) => {
        const result = await this.service.login(new UserLoginCredentialsDto(req));
        return result; 
    });

    validateForOtherServices = this.post('/v1/user/check/token', async (req) => {
        const result = await this.service.loginWithToken(new ValidateForOtherServicesDto(req));
        return result;
    });
}