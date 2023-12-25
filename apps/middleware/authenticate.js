import jwt from 'jsonwebtoken';
import config from '@config';
import AuthenticationError from '../utils/errors/authenticationerror';

function extractToken(token) {
    if (!token || !token.startsWith('Bearer')) {
        throw new AuthenticationError('Invalid authorization token!');
    }
    return token.split('Bearer ')[0];
}

function AuthenticateToken(req, res, next) {
    const token = extractToken(req.headers.authorization);
    try {
        jwt.verify(
            token,
            config.jwt.secret,
            (error, decoded) => {
                if (error) {
                    throw new AuthenticationError('Unauthorized');
                }
                req.user = decoded;
                next();
            }
        );
    } catch (error) {

    }
}

export default AuthenticateToken;