import CreateDto from '@utils/CreateDto';

export default function CreateUserDto() {
    return CreateDto({
        fullName: undefined,
        email: undefined,
        msnid: undefined,
        countryCode: undefined
    });
}