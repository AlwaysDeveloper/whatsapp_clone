import Model from '@models';
import Repository from '@utils/Repository';
import { QueryTypes } from 'sequelize';

export default class UserRepository extends Repository {
    constructor() {
        super(Model.User);
    }

    getUserCredentials(exId) {
        return this.query(
            'SELECT exId, password, user_role FROM users WHERE exId = :id;',
            QueryTypes.SELECT,
            { id: exId }
        );
    }
}