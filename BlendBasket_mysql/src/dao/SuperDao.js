import logger from '../config/logger.js';

class SuperDao {
    constructor(model) {
        this.Model = model;  // The TypeORM model (e.g., User)
        this.repository = null;
    }

    // Initialize the repository once TypeORM connection is available
    setRepository(repository) {
        this.repository = repository;
    }

    async findAll() {
        try {
            return await this.repository.find();
        } catch (e) {
            logger.error(e);
            console.log(e);
        }
    }

    async findById(id) {
        try {
            return await this.repository.findOne({ where: { id } });
        } catch (e) {
            logger.error(e);
            console.log(e);
        }
    }

    async findOneByWhere(where, order = { id: 'desc' }) {
        try {
            return await this.repository.findOne({
                where,
                order,
            });
        } catch (e) {
            logger.error(e);
            console.log(e);
        }
    }

    async updateWhere(data, where) {
        try {
            return await this.repository.update(where, data);
        } catch (e) {
            logger.error(e);
            console.log(e);
        }
    }

    async create(data) {
        try {
            const newEntity = this.repository.create(data);  // Create a new entity instance
            return await this.repository.save(newEntity);    // Save the entity to the database
        } catch (e) {
            logger.error(e);
            console.log(e);
        }
    }

    async deleteByWhere(where) {
        try {
            return await this.repository.delete(where);  // Delete by where condition
        } catch (e) {
            logger.error(e);
            console.log(e);
        }
    }

    async getCountByWhere(where) {
        try {
            return await this.repository.count({ where });
        } catch (e) {
            logger.error(e);
            console.log(e);
        }
    }
}

export default SuperDao;
