// const SuperDao = require('./SuperDao');
// const models = require('../models');
import SuperDao from './SuperDao.js'; // Use import instead of require
import models from '../models/index.js';

const Token = models.token;

class TokenDao extends SuperDao {
    constructor() {
        super(Token);
    }

    async findOne(where) {
        return Token.findOne({ where });
    }

    async remove(where) {
        return Token.destroy({ where });
    }
}

export default TokenDao;
