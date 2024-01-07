import UserRepository from '@repositories/UserRepository';
import JWTSign from '@common/JWT';
import PasswordManager from '@common/PasswordManager';
import AuthenticationError from '@errors/authenticationerror';

export default class LoginService {
    UserRepository = new UserRepository();
    PasswordManager = new PasswordManager();

    async userLoginToken(credentials) {
        const user = await UserRepository.getUserCredentials(credentials.id);
        if (await this.PasswordManager.verify(user.password, credentials.password)) {
            throw new AuthenticationError('Invalid Credentials');
        }
        return JWTSign({ id: user.exId, userRole: user.userRole });
    }
}