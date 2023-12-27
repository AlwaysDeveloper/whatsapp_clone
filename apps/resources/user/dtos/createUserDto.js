import DTO from '@utils/DTO';

export default class CreateUserDto extends DTO {
    fullName;
    email;
    msnid;
    password;
    countryCode;

    constructor(source) {
        super(source);
    }
}