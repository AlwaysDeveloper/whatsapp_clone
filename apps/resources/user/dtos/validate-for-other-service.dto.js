import DTO from "@utils/DTO";

export default class ValidateForOtherServicesDto {
    token;
    userRole;

    constructor(source) {
        DTO(source)(this);
    }
}