import { CreateUserDummyDTO } from '@test/data/DTO';
import { expect } from '@test/tools/assertions';
import ValidationError from '@errors/validationerror';
import CreateUserDto from './create-user.dto';

describe('Unit test for CreateUserDto.', () => {
    let userDummyDTO
    beforeEach(async () => {
        userDummyDTO = CreateUserDummyDTO();
    });

    it('should give error if full name is missing.', async () => {
        try {
            new CreateUserDto({});
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Full name is required!');
        }
    });

    it('should give error if email is missing.', async () => {
        try {
            new CreateUserDto({});
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Email is required!');
        }
    });
    
    it('should give error if country code is missing.', async () => {
        try {
            new CreateUserDto({});
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Country code is required!');
        }
    });

    it('should give error if msnid is missing.', async () => {
        try {
            new CreateUserDto({});
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Mobile number is required!');
        }
    });

    it('should give error if username is missing.', async () => {
        try {
            new CreateUserDto({});
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Username is required!');
        }
    });

    it('should give error if email is not valid.', async () => {
        try {
            new CreateUserDto({ ...userDummyDTO, email: 'email' });
        } catch (error) {
            expect(error).to.instanceOf(ValidationError);
            expect(error).to.have.property('details');
            expect(error).to.have.property('statusCode');
            expect(Object.values(error.details)).to.includes('Email is not valid!');
        }
    });

    it('shouls return dto if all validations passed.', async () => {
        const result = new CreateUserDto(userDummyDTO);
        expect(result).to.instanceOf(CreateUserDto);   
    });
});