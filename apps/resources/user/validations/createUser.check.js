import rule from "@utils/validations/rule";
import notEmpty from "@utils/validations/required";
import isEmail from "@utils/validations/isEmail";
import validate from "@utils/validations/validate";

const rules = {
    fullName: [rule(notEmpty, 'Full name is required!')],
    email: [rule(notEmpty, 'Email is required!'), rule(isEmail, 'Email is not valid!')],
    countryCode: [rule(notEmpty, 'Country code is required!')],
    msnid: [rule(notEmpty, 'Mobile number is required!')]
};

export default function CreateUserValidation(dto) {
    return validate(rules, dto);
}