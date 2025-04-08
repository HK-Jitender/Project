import ProductDao from '../dao/ProductDao.js';
import responseHandler from '../helper/responseHandler.js';
import httpStatus from 'http-status';

class ProductService {
    constructor() {
        this.productDao = new ProductDao();
    }

    // Create a new product
    async createProduct(productData) {
        try {
            const existingProduct = await this.productDao.findOne({ barcode: productData.barcode });
            if (existingProduct) {
                return responseHandler.returnError(
                    httpStatus.BAD_REQUEST,
                    'Product barcode already exists!'
                );
            }
            const newProduct = await this.productDao.save(productData);
            return responseHandler.returnSuccess(
                httpStatus.CREATED,
                'Product created successfully!',
                newProduct
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Update an existing product
    async updateProduct(id, productData) {
        try {
            const existingProduct = await this.productDao.findOne({ id });
            if (!existingProduct) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Product not found!');
            }
            const updatedProduct = await this.productDao.save({ ...existingProduct, ...productData });
            return responseHandler.returnSuccess(
                httpStatus.OK,
                'Product updated successfully!',
                updatedProduct
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Get a product by ID
    async getProductById(id) {
        try {
            const product = await this.productDao.findOne({ id });
            if (!product) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Product not found!');
            }
            return responseHandler.returnSuccess(httpStatus.OK, 'Product found!', product);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Get all products
    async getAllProducts() {
        try {
            const products = await this.productDao.findAll();
            return responseHandler.returnSuccess(httpStatus.OK, 'Products retrieved successfully!', products);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Delete a product
    async deleteProduct(id) {
        try {
            const product = await this.productDao.findOne({ id });
            if (!product) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Product not found!');
            }
            await this.productDao.remove({ id });
            return responseHandler.returnSuccess(httpStatus.NO_CONTENT, 'Product deleted successfully!');
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }
}

export default ProductService;
