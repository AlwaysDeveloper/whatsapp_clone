import rule from "@validation/rule";
import notEmpty from "@validation/notEmpty";
import isEmail from "@validation/isEmail";
import Dto from "@utils/DTO";

export default class CreateUserDto extends Dto {
    fullName;
    email;
    msnid;
    countryCode;
    username;
    password;

    constructor(source) {
        super(
            source,
            {
                fullName: [rule(notEmpty, 'Full name is required!')],
                email: [rule(notEmpty, 'Email is required!'), rule(isEmail, 'Email is not valid!')],
                countryCode: [rule(notEmpty, 'Country code is required!')],
                msnid: [rule(notEmpty, 'Mobile number is required!')],
                username: [rule(notEmpty, 'Username is required!')]
            }
        ).fromBody(this);
    }
}