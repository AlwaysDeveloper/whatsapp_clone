import Model from '@models';
import Repository from '@utils/Repository';

export default class UserRepository extends Repository {
    constructor() {
        super(Model.User);
    }
}