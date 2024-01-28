import rule from "@validation/rule";
import notEmpty from "@validation/notEmpty";
import included from "@validation/included";
import { UserRoles } from "@constants/enums";
import Dto from "@utils/DTO";

export default class ValidateForOtherServicesDto extends Dto {
    token;
    userRole;

    constructor(source) {
        super(
            source, 
            {
                token: [rule(notEmpty, 'Token is required!')],
                userRole: [rule(notEmpty, 'User role is required!'), rule(included(Object.values(UserRoles)), 'User role is not valid!')]
            }
        ).fromBody(this);
    }
}