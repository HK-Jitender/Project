import db from '../models/index.js';  // Importing db instance
import Product from '../models/Product.js';  // Import Product model
import SuperDao from './SuperDao.js';  // Base DAO class

class ProductDao extends SuperDao {
    constructor() {
        super(Product);  // Initialize with Product entity
        this.setRepository(db.getRepository(Product));  // Set repository using TypeORM
    }

    // Find one product by condition
    async findOne(where) {
        return await this.repository.findOne({ where });
    }

    // Get all products
    async findAll() {
        return await this.repository.find();
    }

    // Save a new product (create or update)
    async save(productData) {
        return await this.repository.save(productData);
    }

    // Remove a product by condition
    async remove(where) {
        return await this.repository.delete(where);
    }
}

export default ProductDao;
