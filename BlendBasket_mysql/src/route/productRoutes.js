import express from 'express';
import ProductController from '../controllers/ProductController.js';
import ProductValidator from '../validator/ProductValidator.js';

const router = express.Router();
const productController = new ProductController();
const productValidator = new ProductValidator();

// Routes
router.post('/products', productValidator.validateProductData, productController.createProduct);
router.put('/products/:id', productValidator.validateProductData, productController.updateProduct);
router.get('/products/:id', productValidator.validateProductId, productController.getProductById);
router.get('/products', productController.getAllProducts);
router.delete('/products/:id', productValidator.validateProductId, productController.deleteProduct);

export default router;
