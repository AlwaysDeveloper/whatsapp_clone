import validate from "@validation/validate";
import notEmpty from "@validation/notEmpty";
import rule from "@validation/rule";

const rules = {
    username: [rule(notEmpty, 'Username is required!')],
    password: [rule(notEmpty, 'Password is required!')]
};

export default function UserLoginValidation (dto) {
    return validate(rules, dto);
}