import { CreateUserDummyDTO } from "@test/data/DTO";
import UserService from './user.service';
import { expect } from '@test/tools/assertions';
import TestRepository from "@test/tools/test-repository";
import PasswordManager from "@common/PasswordManager";
import { UserRoles, UserStatus } from "@constants/enums";
import JWTSign from "@common/JWT";

describe.only('Describing the user service specs.', () => {
    let userDummyDTO;
    let token;
    let userRespository;
    let userService;
    const passwordManager = new PasswordManager();

    beforeEach(async () => {
        userDummyDTO = { 
            ...CreateUserDummyDTO(),
            userRole: UserRoles.user,
            isActive: UserStatus.active,
        };
        userRespository = new TestRepository({
            create: {
                ...userDummyDTO,
                toJSON: () => userDummyDTO
            },
            find: {
                ...userDummyDTO,
                password: await passwordManager.hash(userDummyDTO.password)
            }
        });

        token = JWTSign({ id: userDummyDTO.exId, userRole: userDummyDTO.userRole });
        userService = new UserService(userRespository, passwordManager);
    });

    it('should create new user.', async () => {
        const result = await userService.create(userDummyDTO);
        expect(result).to.have.property('token');
        expect(result).to.have.property('exId');
    });

    it('should get the user via user credentials.', async () => {
        const result = await userService.login({ username: userDummyDTO.username, password: userDummyDTO.password });
        expect(result).to.be.have.property('token');
        expect(result.isLoggedIn).to.be.equal(true);
    });

    it('should get logged in using token.', async () => {
        const result = await userService.loginWithToken({token, userRole: userDummyDTO.userRole});
        expect(result).to.be.have.property('exId');
    });
});