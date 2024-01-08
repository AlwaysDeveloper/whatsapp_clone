import { PostRoute, GetRoute } from '@router';
import UserController from './user.controller';

const controller = new UserController();
 
new PostRoute('/v1/user/create')
    .bind(
        controller.createUser,
        'Successfully create a new user.',
        'Not able to create user. Please try again!'
    );

    
