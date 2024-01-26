import DTO from "@utils/DTO";
import rule from "@validation/rule";
import notEmpty from "@validation/notEmpty";
import validate from "@validation/validate";
export default class UserLoginCredentialsDto {
    username;
    password;

    #rules = {
        username: [rule(notEmpty, 'Username is required!')],
        password: [rule(notEmpty, 'Password is required!')]
    };

    constructor(source) {
        DTO(source)(this);
        validate(this.#rules, this);
    }
}