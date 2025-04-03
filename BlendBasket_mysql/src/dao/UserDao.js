// const SuperDao = require('./SuperDao');
// const models = require('../models');

// const User = models.user;

// class UserDao extends SuperDao {
//     constructor() {
//         super(User);
//     }

//     async findByEmail(email) {
//         return User.findOne({ where: { email } });
//     }

//     async isEmailExists(email) {
//         return User.count({ where: { email } }).then((count) => {
//             if (count != 0) {
//                 return true;
//             }
//             return false;
//         });
//     }

//     async createWithTransaction(user, transaction) {
//         return User.create(user, { transaction });
//     }
// }

// module.exports = UserDao;
import db from '../models/index.js'; 
import User from '../models/User.js'; // Use default import// Ensure correct import
import SuperDao from './SuperDao.js';

class UserDao extends SuperDao {
    constructor() {
        super(User);
        this.userRepository =db.dataSource.getRepository(User);
    }

    async findByEmail(email) {
        return await this.userRepository.findOne({ where: { email } });
    }

    async isEmailExists(email) {
        const count = await this.userRepository.count({ where: { email } });
        return count > 0;
    }

    async createWithTransaction(user, transaction) {
        const userEntity = this.userRepository.create(user); // Create entity
        return await this.userRepository.save(userEntity, { transaction });
    }
}

export default UserDao;

