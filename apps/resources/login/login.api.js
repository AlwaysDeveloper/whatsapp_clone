import { PostRoute } from '@router';
import Handler from '@utils/Handler';
import LoginService from './login.service';
import LoginController from './login.controller';

const controller = new LoginController(
    new LoginService()
);

new PostRoute('/v1/login')
    .bind(
        Handler(controller.login),
        'Successfully login!',
        'Not able to login. Please try again later!'
    );