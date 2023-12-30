import { PostRoute, GetRoute } from '@router';
import UserRepository from "@repositories/UserRepository";
import Handler from '@utils/Handler';
import UserService from './user.service';
import UserController from './user.controller';

const controller = new UserController(
    new UserService(
        new UserRepository()
    )
);

new PostRoute('/v1/user/create')
    .bind(
        Handler(
            controller.create,
            'Successfully create a new user.',
            'Not able to create user. Please try again!'
        )
    );