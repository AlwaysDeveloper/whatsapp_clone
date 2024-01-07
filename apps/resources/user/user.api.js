import { PostRoute, GetRoute } from '@router';
import Handler from '@utils/Handler';
import UserController from './user.controller';

const controller = new UserController();
 
new PostRoute('/v1/user/create')
    .bind(
        Handler(
            controller.createUser,
            'Successfully create a new user.',
            'Not able to create user. Please try again!'
        )
    );

    