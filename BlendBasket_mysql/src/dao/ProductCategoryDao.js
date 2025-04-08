import db from '../models/index.js'; // Import db instance
import ProductCategory from '../models/ProductCategory.js'; // Import ProductCategory model
import SuperDao from './SuperDao.js'; // Base DAO class

class ProductCategoryDao extends SuperDao {
    constructor() {
        super(ProductCategory); // Initialize with ProductCategory entity
        this.setRepository(db.getRepository(ProductCategory)); // Set repository using TypeORM
    }

    // Find one product category by a condition (e.g., by name or id)
    async findOne(where) {
        return await this.repository.findOne({ where });
    }

    // Get all product categories
    async findAll() {
        return await this.repository.find();
    }

    // Save a new product category (create or update)
    async save(productCategoryData) {
        return await this.repository.save(productCategoryData);
    }

    // Update an existing product category
    async update(productCategoryData) {
        const existingCategory = await this.findOne({ name: productCategoryData.name });
        if (!existingCategory) {
            throw new Error('Product category not found'); // Handle non-existing category
        }
        return await this.repository.update({ name: productCategoryData.name }, productCategoryData); // Update category
    }

    // Remove a product category by condition
    async remove(where) {
        return await this.repository.delete(where);
    }
}

export default ProductCategoryDao;
