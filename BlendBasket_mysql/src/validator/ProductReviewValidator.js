import Joi from 'joi';
import httpStatus from 'http-status';
import ApiError from '../helper/ApiError.js';

class ProductReviewValidator {
  // Validate product review data for create/update
  async validateProductReviewData(req, res, next) {
    const schema = Joi.object({
      productId: Joi.string().required(),
      userId: Joi.string().required(),
      rating: Joi.number().min(1).max(5).required(),
      feedback: Joi.string().required().max(500),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details.map((details) => details.message).join(', ');
      next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    } else {
      req.body = value;
      next();
    }
  }
}

export default ProductReviewValidator;
