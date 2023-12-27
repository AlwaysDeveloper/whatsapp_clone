import bcrypt from 'bcrypt';
import config from '@config';

export default class PasswordManager {
    /**
     * 
     * @param {string} password 
     * @returns {Promise<string>}
     */
    async hash(password) {
        return bcrypt.hash(password, config.passwordManager.salt);
    }

    /**
     * 
     * @param {string} hash 
     * @param {string} password 
     * @returns {Promise<boolean>}
     */
    async verify(hash, password) {
        return bcrypt.compare(password, hash);
    }
}