import { CreateUserDummyDTO } from "../../test/data/DTO";
import UserRepository from '../../repositories/UserRepository';
import UserService from './user.service';
import { expect } from '../../test/tools/assertions';

describe('Describing the user service specs.', () => {
    let userDummyDTO;
    let userTest;
    const userRespository = new UserRepository();
    const userService = new UserService();

    beforeEach(async () => {
        userDummyDTO = CreateUserDummyDTO();
        userTest = await userRespository.create(userDummyDTO);
    });

    it('should create new user.', async () => {
        const result = await userService.create(userDummyDTO);
        expect(result.username).to.eql(userDummyDTO.username);
        expect(result).to.have.property('token');
        expect(result).to.have.property('exId');
        expect(result).to.have.property('id');
    });

    afterEach(async () => {
        userTest.destroy();
    });
});