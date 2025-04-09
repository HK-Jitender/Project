import ProductReviewService from '../service/ProductReviewService.js';
import logger from '../config/logger.js';
import httpStatus from 'http-status';

class ProductReviewController {
  constructor() {
    this.productReviewService = new ProductReviewService();
  }

  // Create a new product review
  createProductReview = async (req, res) => {
    try {
      const reviewData = req.body;
      const result = await this.productReviewService.createProductReview(reviewData);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  // Update an existing product review
  updateProductReview = async (req, res) => {
    try {
      const { id } = req.params;
      const reviewData = req.body;
      const result = await this.productReviewService.updateProductReview(id, reviewData);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  // Get reviews by product ID
  getReviewsByProductId = async (req, res) => {
    try {
      const { productId } = req.params;
      const result = await this.productReviewService.getReviewsByProductId(productId);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  // Get reviews by user ID
  getReviewsByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
      const result = await this.productReviewService.getReviewsByUserId(userId);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  // Delete a product review
  deleteProductReview = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.productReviewService.deleteProductReview(id);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

export default ProductReviewController;
