import httpStatus from 'http-status';
import ProductCategoryService from '../service/ProductCategoryService.js';
import logger from '../config/logger.js';

class ProductCategoryController {
    constructor() {
        this.productCategoryService = new ProductCategoryService();
    }

    // Create a new product category
    createProductCategory = async (req, res) => {
        try {
            const productCategoryData = req.body;
            const result = await this.productCategoryService.createProductCategory(productCategoryData);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Update an existing product category
    updateProductCategory = async (req, res) => {
        try {
            const { id } = req.params;
            const productCategoryData = req.body;
            const result = await this.productCategoryService.updateProductCategory(id, productCategoryData);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get a product category by ID
    getProductCategoryById = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.productCategoryService.getProductCategoryById(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get all product categories
    getAllProductCategories = async (req, res) => {
        try {
            const result = await this.productCategoryService.getAllProductCategories();
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Delete a product category
    deleteProductCategory = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.productCategoryService.deleteProductCategory(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

export default ProductCategoryController;
