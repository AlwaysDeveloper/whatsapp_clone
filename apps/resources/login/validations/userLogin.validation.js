import rule from '@utils/validations/rule';
import notEmpty from '@utils/validations/notEmpty';
import validate from '@utils/validations/validate';

export default function UserLoginValidation(dto) {
    const rules = {
        unique: [rule(notEmpty, 'Username/Mobile/Email is required!')],
        password: [rule(notEmpty, 'Password is required!')]
    }

    return validate(rules, dto);
}