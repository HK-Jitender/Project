import express from 'express';
import ProductCategoryController from '../controllers/ProductCategoryController.js';
import ProductCategoryValidator from '../validator/ProductCategoryValidator.js';

const router = express.Router();
const productCategoryController = new ProductCategoryController();
const productCategoryValidator = new ProductCategoryValidator();

// Routes
router.post('/product-categories', productCategoryValidator.validateProductCategoryData, productCategoryController.createProductCategory);
router.put('/product-categories/:id', productCategoryValidator.validateProductCategoryData, productCategoryController.updateProductCategory);
router.get('/product-categories/:id', productCategoryValidator.validateProductCategoryId, productCategoryController.getProductCategoryById);
router.get('/product-categories', productCategoryController.getAllProductCategories);
router.delete('/product-categories/:id', productCategoryValidator.validateProductCategoryId, productCategoryController.deleteProductCategory);

export default router;
