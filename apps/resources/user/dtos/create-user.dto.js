import DTO from "@utils/DTO";
import rule from "@validation/rule";
import notEmpty from "@validation/notEmpty";
import isEmail from "@validation/isEmail";
import validate from "@validation/validate";

export default class CreateUserDto {
    fullName;
    email;
    msnid;
    countryCode;
    username;

    #rules = {
        fullName: [rule(notEmpty, 'Full name is required!')],
        email: [rule(notEmpty, 'Email is required!'), rule(isEmail, 'Email is not valid!')],
        countryCode: [rule(notEmpty, 'Country code is required!')],
        msnid: [rule(notEmpty, 'Mobile number is required!')],
        username: [rule(notEmpty, 'Username is required!')]
    };

    constructor(source) {
        DTO(source)(this);
        validate(this.#rules, this);
    }
}