import { CreateUserDummyDTO } from "../../test/data/DTO";
import UserRepository from '../../repositories/UserRepository';
import UserService from './user.service';
import { expect } from '@test/tools/assertions';
import PasswordManager from "@common/PasswordManager";
import { UserRoles, UserStatus } from "@constants/enums";
import { JWTSign } from "@common/JWT";
import { MockRepository } from "@test/tools/test-repository";
import UserRepository from "@repositories/UserRepository";

describe.skip('Describing the user service specs.', () => {
    let userDummyDTO;
    let token;
    let userService;
    const passwordManager = new PasswordManager();
    let userMockRepository;

    beforeEach(async () => {
        userDummyDTO = { 
            ...CreateUserDummyDTO(),
            userRole: UserRoles.user,
            isActive: UserStatus.active,
        };

        userMockRepository = new MockRepository(UserRepository, {
            create: {
                ...userDummyDTO,
                toJSON: () => userDummyDTO
            },
            find: {
                ...userDummyDTO,
                password: await passwordManager.hash(userDummyDTO.password)
            },
            getUserCredentials: {
                ...userDummyDTO
            }
        });

        token = JWTSign({ id: userDummyDTO.exId, userRole: userDummyDTO.userRole });
        userService = new UserService(new UserRepository(), passwordManager);
    });

    it('should create new user.', async () => {
        const result = await userService.create(userDummyDTO);
        expect(result.username).to.eql(userDummyDTO.username);
        expect(result).to.have.property('token');
        expect(result).to.have.property('exId');
        expect(result).to.have.property('id');
    });

    afterEach(async () => {
        await userRespository.clean();
    });

    afterEach(() => {
        userMockRepository?.restore();
    });
});