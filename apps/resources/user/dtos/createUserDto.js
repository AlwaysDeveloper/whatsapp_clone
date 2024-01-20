import DTO from "@utils/DTO";
export default class CreateUserDto {
    fullName;
    email;
    msnid;
    password;
    countryCode;

    constructor(source) {
        DTO(source)(this);
    }
}