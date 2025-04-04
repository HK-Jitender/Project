// const bcrypt = require('bcryptjs');
// const httpStatus = require('http-status');
// const UserDao = require('../dao/UserDao');
// const TokenDao = require('../dao/TokenDao');
// const { tokenTypes } = require('../config/tokens');
// const responseHandler = require('../helper/responseHandler');
// const logger = require('../config/logger');
// const RedisService = require('./RedisService');
import bcrypt from 'bcryptjs'; // Use import instead of require
import httpStatus from 'http-status'; // Use import instead of require
import UserDao from '../dao/UserDao.js'; // Ensure to include .js extension
import TokenDao from '../dao/TokenDao.js'; // Ensure to include .js extension
import tokenTypes  from '../config/tokens.js'; // Ensure to include .js extension
import responseHandler from '../helper/responseHandler.js'; // Ensure to include .js extension
import logger from '../config/logger.js'; // Ensure to include .js extension
import RedisService from './RedisService.js'

class AuthService {
    constructor() {
        this.userDao = new UserDao();
        this.tokenDao = new TokenDao();
        this.redisService = new RedisService();
    }

    /**
     * Create a user
     * @param {String} email
     * @param {String} password
     * @returns {Promise<{response: {code: *, message: *, status: boolean}, statusCode: *}>}
     */
    loginWithEmailPassword = async (email, password) => {
        try {
            let message = 'Login Successful';
            let statusCode = httpStatus.OK;
            let user = await this.userDao.findByEmail(email);
            if (user == null) {
                return responseHandler.returnError(
                    httpStatus.BAD_REQUEST,
                    'Invalid Email Address!',
                );
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            // if (user.toJSON) {
            //     user = user.toJSON();
            // }
            delete user.password;

            if (!isPasswordValid) {
                statusCode = httpStatus.BAD_REQUEST;
                message = 'Wrong Password!';
                return responseHandler.returnError(statusCode, message);
            }

            return responseHandler.returnSuccess(statusCode, message, user);
        } catch (e) {
            logger.error(e);
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something Went Wrong!!');
        }
    };

    logout = async (req, res) => {
        const refreshTokenDoc = await this.tokenDao.findOne({
            token: req.body.refresh_token,
            type: tokenTypes.REFRESH,
            blacklisted: false,
        });
        if (!refreshTokenDoc) {
            return false;
        }
        await this.tokenDao.remove({
            token: req.body.refresh_token,
            type: tokenTypes.REFRESH,
            blacklisted: false,
        });
        await this.tokenDao.remove({
            token: req.body.access_token,
            type: tokenTypes.ACCESS,
            blacklisted: false,
        });
        await this.redisService.removeToken(req.body.access_token, 'access_token');
        await this.redisService.removeToken(req.body.refresh_token, 'refresh_token');
        return true;
    };
}

export default AuthService;
