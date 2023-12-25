import { PostRoute, GetRoute } from '@router';
import CreateUserDto from './dtos/createUserDto';
import Handler from '@utils/Handler';
import CreateUserValidation from './validations/createUser.check';
import UserService from './user.service';

const service = new UserService();

const createUser = async (req) => {
    const createUser = CreateUserValidation(CreateUserDto(req.body));
    return service.create(createUser);
};

new PostRoute('/v1/user/create')
    .bind(
        Handler(
            createUser,
            'Successfully create a new user.',
            'Not able to create user. Please try again!'
        )
    );


const getUserByMsnId = async (req) => {
    const msnId = req.params.msnid;
    return service.findByMsnId(msnId);
}

new GetRoute('/v1/user/:msnid')
    .bind(
        Handler(
            getUserByMsnId,
            'Successfully find the user!',
            'Not able to find the user. Please try agin later!'
        )
    );