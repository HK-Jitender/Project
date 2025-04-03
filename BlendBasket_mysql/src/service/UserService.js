// // const httpStatus = require('http-status');
// // const bcrypt = require('bcryptjs');
// // const { v4: uuidv4 } = require('uuid');
// // const UserDao = require('../dao/UserDao');
// // const responseHandler = require('../helper/responseHandler');
// // const logger = require('../config/logger');
// // const { userConstant } = require('../config/constant');

// // class UserService {
// //     constructor() {
// //         this.userDao = new UserDao();
// //     }

// //     /**
// //      * Create a user
// //      * @param {Object} userBody
// //      * @returns {Object}
// //      */
// //     createUser = async (userBody) => {
// //         try {
// //             let message = 'Successfully Registered the account! Please Verify your email.';
// //             if (await this.userDao.isEmailExists(userBody.email)) {
// //                 return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email already taken');
// //             }
// //             const uuid = uuidv4();
// //             userBody.email = userBody.email.toLowerCase();
// //             userBody.password = bcrypt.hashSync(userBody.password, 8);
// //             userBody.uuid = uuid;
// //             userBody.status = userConstant.STATUS_ACTIVE;
// //             userBody.email_verified = userConstant.EMAIL_VERIFIED_FALSE;

// //             let userData = await this.userDao.create(userBody);

// //             if (!userData) {
// //                 message = 'Registration Failed! Please Try again.';
// //                 return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
// //             }
          
// //             userData = userData.toJSON();
// //             delete userData.password;

// //             return responseHandler.returnSuccess(httpStatus.CREATED, message, userData);
// //         } catch (e) {
// //             logger.error(e);
// //             return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
// //         }
// //     };

// //     /**
// //      * Get user
// //      * @param {String} email
// //      * @returns {Object}
// //      */

// //     isEmailExists = async (email) => {
// //         const message = 'Email found!';
// //         if (!(await this.userDao.isEmailExists(email))) {
// //             return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email not Found!!');
// //         }
// //         return responseHandler.returnSuccess(httpStatus.OK, message);
// //     };

// //     getUserByUuid = async (uuid) => {
// //         return this.userDao.findOneByWhere({ uuid });
// //     };

// //     changePassword = async (data, uuid) => {
// //         let message = 'Login Successful';
// //         let statusCode = httpStatus.OK;
// //         let user = await this.userDao.findOneByWhere({ uuid });

// //         if (!user) {
// //             return responseHandler.returnError(httpStatus.NOT_FOUND, 'User Not found!');
// //         }

// //         if (data.password !== data.confirm_password) {
// //             return responseHandler.returnError(
// //                 httpStatus.BAD_REQUEST,
// //                 'Confirm password not matched',
// //             );
// //         }

// //         const isPasswordValid = await bcrypt.compare(data.old_password, user.password);
// //         user = user.toJSON();
// //         delete user.password;
// //         if (!isPasswordValid) {
// //             statusCode = httpStatus.BAD_REQUEST;
// //             message = 'Wrong old Password!';
// //             return responseHandler.returnError(statusCode, message);
// //         }
// //         const updateUser = await this.userDao.updateWhere(
// //             { password: bcrypt.hashSync(data.password, 8) },
// //             { uuid },
// //         );

// //         if (updateUser) {
// //             return responseHandler.returnSuccess(
// //                 httpStatus.OK,
// //                 'Password updated Successfully!',
// //                 {},
// //             );
// //         }

// //         return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Password Update Failed!');
// //     };
// // }

// // module.exports = UserService;

import httpStatus from'http-status';
import bcrypt from'bcryptjs';
import { v4 as  uuidv4 } from'uuid';
import UserDao from '../dao/UserDao.js';
import responseHandler from'../helper/responseHandler.js';
import logger from '../config/logger.js';
import  userConstant  from '../config/constant.js';

class UserService {
    constructor() {
        this.userDao = new UserDao();
    }

    /**
     * Create a user
     * @param {Object} userBody
     * @returns {Object}
     */
    createUser = async (userBody) => {
        try {
            let message = 'Successfully Registered the account! Please Verify your email.';
            if (await this.userDao.isEmailExists(userBody.email)) {
                return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email already taken');
            }
            const uuid = uuidv4();
            userBody.email = userBody.email.toLowerCase();
            userBody.password = bcrypt.hashSync(userBody.password, 8);
            userBody.uuid = uuid;
            userBody.status = userConstant.STATUS_ACTIVE;
            userBody.email_verified = userConstant.EMAIL_VERIFIED_FALSE;

            const userData = await this.userDao.create(userBody);

            if (!userData) {
                message = 'Registration Failed! Please Try again.';
                return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
            }
          
            // With TypeORM, we don't need to call toJSON() as the entity is already a plain object
            // Just create a copy of the object to avoid modifying the original
            const userResponse = { ...userData };
            delete userResponse.password;

            return responseHandler.returnSuccess(httpStatus.CREATED, message, userResponse);
        } catch (e) {
            logger.error(e);
            return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
        }
    };

    /**
     * Get user
     * @param {String} email
     * @returns {Object}
     */
    isEmailExists = async (email) => {
        const message = 'Email found!';
        if (!(await this.userDao.isEmailExists(email))) {
            return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email not Found!!');
        }
        return responseHandler.returnSuccess(httpStatus.OK, message);
    };

    getUserByUuid = async (uuid) => {
        return this.userDao.findOneByWhere({ uuid });
    };

    changePassword = async (data, uuid) => {
        let message = 'Login Successful';
        let statusCode = httpStatus.OK;
        let user = await this.userDao.findOneByWhere({ uuid });

        if (!user) {
            return responseHandler.returnError(httpStatus.NOT_FOUND, 'User Not found!');
        }

        if (data.password !== data.confirm_password) {
            return responseHandler.returnError(
                httpStatus.BAD_REQUEST,
                'Confirm password not matched',
            );
        }

        const isPasswordValid = await bcrypt.compare(data.old_password, user.password);
        
        // With TypeORM, we don't need to call toJSON() as the entity is already a plain object
        // Just create a copy of the object to avoid modifying the original
        const userResponse = { ...user };
        delete userResponse.password;
        
        if (!isPasswordValid) {
            statusCode = httpStatus.BAD_REQUEST;
            message = 'Wrong old Password!';
            return responseHandler.returnError(statusCode, message);
        }
        
        const updateUser = await this.userDao.updateWhere(
            { password: bcrypt.hashSync(data.password, 8) },
            { uuid },
        );

        if (updateUser) {
            return responseHandler.returnSuccess(
                httpStatus.OK,
                'Password updated Successfully!',
                {},
            );
        }

        return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Password Update Failed!');
    };
}

export default UserService;
// import UserDao from '../dao/UserDao.js';

// class UserService {
//     constructor() {
//         this.userDao = new UserDao();
//     }


    // async findByEmail(email) {
    //     return await this.userRepository.findOne({ where: { email } });
    // }

    // async isEmailExists(email) {
    //     const count = await this.userRepository.count({ where: { email } });
    //     return count > 0;
    // }

    // async createWithTransaction(user, transaction) {
    //     return await this.userRepository.save(user, { transaction });
    // }

    // async create(user) {
    //     return await this.userRepository.save(user);
    // }

    // async findOneByWhere(condition) {
    //     return await this.userRepository.findOne({ where: condition });
    // }

    // async updateWhere(updateData, condition) {
    //     await this.userRepository.update(condition, updateData);
    //     return this.userRepository.findOne({ where: condition });
    // }
//      createUser = async (name, email, password) => {
//         try {
//           const userRepository = getManager().getRepository(User);
//           const newUser = new User();
//           newUser.name = name;
//           newUser.email = email;
//           newUser.password = password;
      
//           await userRepository.save(newUser);
//           return newUser;
//         } catch (error) {
//           throw new Error("Error creating user: " + error.message);
//         }
//       };
      
//  getAllUsers = async () => {
//     try {
//       const userRepository = getManager().getRepository(User);
//       return await userRepository.find();
//     } catch (error) {
//       throw new Error("Error fetching users: " + error.message);
//     }
//   };
  
//    getUserById = async (id) => {
//     try {
//       const userRepository = getManager().getRepository(User);
//       return await userRepository.findOne(id);
//     } catch (error) {
//       throw new Error("Error fetching user by ID: " + error.message);
//     }
//   };
  
//    updateUser = async (id, name, email, password) => {
//     try {
//       const userRepository = getManager().getRepository(User);
//       let user = await userRepository.findOne(id);
//       if (!user) {
//         throw new Error("User not found");
//       }
//       user.name = name;
//       user.email = email;
//       user.password = password;
  
//       await userRepository.save(user);
//       return user;
//     } catch (error) {
//       throw new Error("Error updating user: " + error.message);
//     }
//   };
  
//    deleteUser = async (id) => {
//     try {
//       const userRepository = getManager().getRepository(User);
//       let user = await userRepository.findOne(id);
//       if (!user) {
//         throw new Error("User not found");
//       }
  
//       await userRepository.remove(user);
//       return user;
//     } catch (error) {
//       throw new Error("Error deleting user: " + error.message);
//     }
   
// }


// };
//  export default UserService;
