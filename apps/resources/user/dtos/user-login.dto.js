import rule from "@validation/rule";
import notEmpty from "@validation/notEmpty";
import Dto from "@utils/DTO";
export default class UserLoginCredentialsDto extends Dto{
    username;
    password;

    constructor(source) {
        super(
            source,
            {
                username: [rule(notEmpty, 'Username is required!')],
                password: [rule(notEmpty, 'Password is required!')]
            }
        ).fromBody(this);
    }
}