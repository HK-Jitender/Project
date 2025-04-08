import ProductCategoryDao from '../dao/ProductCategoryDao.js'; // Import ProductCategory DAO
import responseHandler from '../helper/responseHandler.js'; // Handle responses
import httpStatus from 'http-status'; // HTTP status codes

class ProductCategoryService {
    constructor() {
        this.productCategoryDao = new ProductCategoryDao();
    }

    // Create a new product category
    async createProductCategory(productCategoryData) {
        try {
            const existingCategory = await this.productCategoryDao.findOne({ name: productCategoryData.name });
            if (existingCategory) {
                return responseHandler.returnError(
                    httpStatus.BAD_REQUEST,
                    'Product category name already exists!'
                );
            }
            const newProductCategory = await this.productCategoryDao.save(productCategoryData);
            return responseHandler.returnSuccess(
                httpStatus.CREATED,
                'Product category created successfully!',
                newProductCategory
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Update an existing product category
    async updateProductCategory(id, productCategoryData) {
        try {
            const existingCategory = await this.productCategoryDao.findOne({ id });
            if (!existingCategory) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Product category not found!');
            }
            const updatedCategory = await this.productCategoryDao.save({ ...existingCategory, ...productCategoryData });
            return responseHandler.returnSuccess(
                httpStatus.OK,
                'Product category updated successfully!',
                updatedCategory
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Get a product category by ID
    async getProductCategoryById(id) {
        try {
            const category = await this.productCategoryDao.findOne({ id });
            if (!category) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Product category not found!');
            }
            return responseHandler.returnSuccess(httpStatus.OK, 'Product category found!', category);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Get all product categories
    async getAllProductCategories() {
        try {
            const categories = await this.productCategoryDao.findAll();
            return responseHandler.returnSuccess(httpStatus.OK, 'Product categories retrieved successfully!', categories);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Delete a product category
    async deleteProductCategory(id) {
        try {
            const category = await this.productCategoryDao.findOne({ id });
            if (!category) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Product category not found!');
            }
            await this.productCategoryDao.remove({ id });
            return responseHandler.returnSuccess(httpStatus.NO_CONTENT, 'Product category deleted successfully!');
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }
}

export default ProductCategoryService;
