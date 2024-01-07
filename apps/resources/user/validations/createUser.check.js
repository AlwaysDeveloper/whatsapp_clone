import rule from "@validation/rule";
import notEmpty from "@validation/notEmpty";
import isEmail from "@validation/isEmail";
import validate from "@validation/validate";

const rules = {
    fullName: [rule(notEmpty, 'Full name is required!')],
    email: [rule(notEmpty, 'Email is required!'), rule(isEmail, 'Email is not valid!')],
    countryCode: [rule(notEmpty, 'Country code is required!')],
    msnid: [rule(notEmpty, 'Mobile number is required!')]
};

export default function CreateUserValidation(dto) {
    return validate(rules, dto);
}