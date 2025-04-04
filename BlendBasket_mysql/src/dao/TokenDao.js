import db from '../models/index.js'; // Import the db instance
import Token from '../models/Token.js'; // Ensure the Token model is imported
import SuperDao from './SuperDao.js';

class TokenDao extends SuperDao {
    constructor() {
        super(Token);  // Initialize with Token model
        this.setRepository(db.getRepository(Token));  // Set the repository using TypeORM dataSource
    }

    // Find a token by a condition
    async findOne(where) {
        return await this.repository.findOne({ where });
    }

    // Remove tokens by a condition
    async remove(where) {
        return await this.repository.delete(where); // Use delete method for removal
    }

    // Bulk insert tokens (equivalent to bulkCreate)
    async bulkCreate(tokens) {
        try {
            const tokenEntities = tokens.map((token) => this.repository.create(token));  // Create Token entities
            return await this.repository.save(tokenEntities);  // Save them in bulk
        } catch (error) {
            throw new Error(`Error during bulk creation: ${error.message}`);
        }
    }
}

export default TokenDao;
