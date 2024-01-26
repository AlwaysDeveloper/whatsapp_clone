import UserRepository from '../../repositories/UserRepository';
import JWTSign from "@common/JWT";
import { userStatus } from '../../constants/enums';
import PasswordManager from '../../common/PasswordManager';
import AuthenticationError from '../../utils/errors/authenticationerror';
import { JWTVerify } from '../../common/JWT';

export default class UserService {
    constructor() { 
        this.repository = new UserRepository();
        this.passwordManager = new PasswordManager();
    }

    async create(user) {
        const newUser = await this.repository.create(user);
        const token = JWTSign({ id: newUser.exId, userRole: newUser.user_role });
        return { ...newUser, token };
    }

    async login(userCredentials) {
        const user = await this.repository.find({
            attributes: ['password', 'userRole', 'exId'],
            where: {
                username: userCredentials.username,
                isActive: userStatus.active
            }
        });
        const isPasswordCheck = await this.passwordManager.verify(user.password, userCredentials.password);
        if(!isPasswordCheck) {
            throw new AuthenticationError('Username or password is invalid!');
        }
        const token = JWTSign({ id: user.exId, userRole: user.userRole });
        return { token, isLoggedIn: true };
    }

    async loginWithToken(loginCredentials) {
        const decoded = await JWTVerify(loginCredentials.token);
        const user = await this.repository.find({
            where: {
                exId: decoded.id,
                userRole: loginCredentials.userRole,
                isActive: userStatus.active
            }
        });
        return user;
    }
}
