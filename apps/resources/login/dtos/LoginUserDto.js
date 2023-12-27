import DTO from '@utils/DTO';

export default class UserLoginDto extends DTO {
    username;
    password;

    constructor(source) {
        super(source);
    }
}