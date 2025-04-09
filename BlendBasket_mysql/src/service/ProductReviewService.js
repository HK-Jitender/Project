import ProductReviewDao from '../dao/ProductReviewDao.js';
import responseHandler from '../helper/responseHandler.js';
import httpStatus from 'http-status';

class ProductReviewService {
  constructor() {
    this.productReviewDao = new ProductReviewDao();
  }

  // Create a new product review
  async createProductReview(reviewData) {
    try {
      const newReview = await this.productReviewDao.save(reviewData);
      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        'Review created successfully!',
        newReview
      );
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }

  // Update an existing product review
  async updateProductReview(id, reviewData) {
    try {
      const updatedReview = await this.productReviewDao.update(id, reviewData);
      return responseHandler.returnSuccess(
        httpStatus.OK,
        'Review updated successfully!',
        updatedReview
      );
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }

  // Get all reviews for a product
  async getReviewsByProductId(productId) {
    try {
      const reviews = await this.productReviewDao.findByProductId(productId);
      if (reviews.length === 0) {
        return responseHandler.returnError(httpStatus.NOT_FOUND, 'No reviews found for this product');
      }
      return responseHandler.returnSuccess(
        httpStatus.OK,
        'Product reviews retrieved successfully!',
        reviews
      );
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }

  // Get all reviews by a user
  async getReviewsByUserId(userId) {
    try {
      const reviews = await this.productReviewDao.findByUserId(userId);
      return responseHandler.returnSuccess(
        httpStatus.OK,
        'User reviews retrieved successfully!',
        reviews
      );
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }

  // Delete a review
  async deleteProductReview(id) {
    try {
      await this.productReviewDao.remove(id);
      return responseHandler.returnSuccess(httpStatus.NO_CONTENT, 'Review deleted successfully!');
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }
}

export default ProductReviewService;
