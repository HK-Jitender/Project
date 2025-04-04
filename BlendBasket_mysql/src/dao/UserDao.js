import db from '../models/index.js';
import User from '../models/User.js'; // Ensure the User model is correctly imported
import SuperDao from './SuperDao.js';

class UserDao extends SuperDao {
    constructor() {
        super(User);
        this.setRepository(db.getRepository(User));  // Set the TypeORM repository for User
    }

    async findByEmail(email) {
        return await this.repository.findOne({ where: { email } });
    }

    async isEmailExists(email) {
        const count = await this.repository.count({ where: { email } });
        return count > 0;
    }

    async createWithTransaction(user, transaction) {
        const userEntity = this.repository.create(user);  // Create a new User entity
        return await this.repository.save(userEntity, { transaction });  // Save with transaction
    }
}

export default UserDao;
