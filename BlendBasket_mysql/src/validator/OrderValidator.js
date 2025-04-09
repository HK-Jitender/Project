import Joi from 'joi';
import httpStatus from 'http-status';
import ApiError from '../helper/ApiError.js';

class OrderValidator {
  async validateOrderData(req, res, next) {
    const schema = Joi.object({
      customerId: Joi.number().required(),
      total: Joi.number().required(),
      status: Joi.string().valid('Order confirmed', 'Picking', 'Checking out', 'Delivered', 'Cancel').required(),
      delivery: Joi.string().required(),
      paymentMethod: Joi.string().required(),
      items: Joi.array().items(
        Joi.object({
          productId: Joi.number().required(),
          quantity: Joi.number().required(),
          price: Joi.number().required(),
        })
      ).required(),
      orderSummary: Joi.array().items(
        Joi.object({
          subtotal: Joi.number().required(),
          serviceFee: Joi.number().required(),
          overWeightFee: Joi.number().required(),
        })
      ).required(),
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

export default OrderValidator;
