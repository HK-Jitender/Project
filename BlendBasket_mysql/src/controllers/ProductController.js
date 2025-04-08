import httpStatus from 'http-status';
import ProductService from '../service/ProductService.js';
import logger from '../config/logger.js';

class ProductController {
    constructor() {
        this.productService = new ProductService();
    }

    // Create a new product
    createProduct = async (req, res) => {
        try {
            const productData = req.body;
            const result = await this.productService.createProduct(productData);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Update an existing product
    updateProduct = async (req, res) => {
        try {
            const { id } = req.params;
            const productData = req.body;
            const result = await this.productService.updateProduct(id, productData);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get a product by ID
    getProductById = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.productService.getProductById(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get all products
    getAllProducts = async (req, res) => {
        try {
            const result = await this.productService.getAllProducts();
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Delete a product
    deleteProduct = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.productService.deleteProduct(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

export default ProductController;
