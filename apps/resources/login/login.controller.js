import UserLoginDto from "./dtos/LoginUserDto";
import LoginService from "./login.service";
import UserLoginValidation from "./validations/userLogin.validation";

export default class LoginController {
    /**
     * @param {LoginService} loginService 
     */
    constructor(loginService) {
        this.service = loginService;
    }

    async login(req) {
        const credentials = UserLoginValidation(new UserLoginDto(req));
        const token = await this.service.userLoginToken(credentials);
        return token;
    }
} 