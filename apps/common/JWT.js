import JsonWebToken from 'jsonwebtoken';
import config from '@config';

export default function JWTSign(payload) {
    return JsonWebToken.sign(
        payload,
        config.jwt.secret,
        {
            expiresIn: config.jwt.expire
        }
    );
}