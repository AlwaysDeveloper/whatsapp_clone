import { CreateUserDummyDTO } from '@test/data/DTO';
import { expect } from '@test/tools/assertions';
import ValidationError from '@errors/validationerror';
import UserLoginCredentialsDto from './user-login.dto';

describe('Unit test for UserLoginCredentialsDto.', () => {
    let userDummyDTO
    beforeEach(async () => {
        userDummyDTO = CreateUserDummyDTO();
    });

    it('shoudl give error if username is missing.', async () => {
        try {
            new UserLoginCredentialsDto({});
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Username is required!');
        }
    });

    it('should give error if password is missing.', async () => {
        try {
            new UserLoginCredentialsDto({});
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Password is required!');
        }
    });

    it('should returns dto if all validations passed.', async () => {
        const result = new UserLoginCredentialsDto({ username: userDummyDTO.username, password: 'test' });
        expect(result).to.be.instanceOf(UserLoginCredentialsDto);
        expect(result.username).to.be.equal(userDummyDTO.username);
    });
});