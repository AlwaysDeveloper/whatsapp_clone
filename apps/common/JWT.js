import JsonWebToken from 'jsonwebtoken';
import config from '@config';
import AuthenticationError from '../utils/errors/authenticationerror';

export function JWTSign(payload) {
    return JsonWebToken.sign(
        payload,
        config.jwt.secret,
        {
            expiresIn: config.jwt.expire
        }
    );
}

export function JWTVerify(token) {
    return new Promise((resolve, reject) => {
        JsonWebToken.verify(
            token,
            config.jwt.secret,
            (error, decoded) => {
                if(error) {
                    reject(new AuthenticationError('Unauthorized'));
                }
                resolve(decoded);
            }
        );
    });
}