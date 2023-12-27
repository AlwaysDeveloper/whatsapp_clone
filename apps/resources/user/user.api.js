import { PostRoute, GetRoute } from '@router';
import CreateUserDto from './dtos/createUserDto';
import Handler from '@utils/Handler';
import CreateUserValidation from './validations/createUser.check';
import UserService from './user.service';
import UserController from './user.controller';

const controller = new UserController(new UserService());

new PostRoute('/v1/user/create')
    .bind(
        Handler(
            controller.create,
            'Successfully create a new user.',
            'Not able to create user. Please try again!'
        )
    );