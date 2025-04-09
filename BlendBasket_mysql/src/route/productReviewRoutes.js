import express from 'express';
import ProductReviewController from '../controllers/ProductReviewController.js';
import ProductReviewValidator from '../validator/ProductReviewValidator.js'; // Import the validator

const router = express.Router();
const productReviewController = new ProductReviewController();
const productReviewValidator = new ProductReviewValidator();

// Routes for Product Reviews
router.post('/product-reviews', 
  productReviewValidator.validateProductReviewData, // Validate data before controller action
  productReviewController.createProductReview
);

router.put('/product-reviews/:id', 
  productReviewValidator.validateProductReviewData, // Validate data before controller action
  productReviewController.updateProductReview
);

router.get('/product-reviews/by-product/:productId', productReviewController.getReviewsByProductId);  // Use 'by-product' for product reviews
router.get('/product-reviews/by-user/:userId', productReviewController.getReviewsByUserId); 

router.delete('/product-reviews/:id', productReviewController.deleteProductReview);

export default router;
