import DTO from "@utils/DTO";

export default class UserLoginCredentialsDto {
    username;
    password;

    constructor(source) {
        DTO(source)(this);
    }
}