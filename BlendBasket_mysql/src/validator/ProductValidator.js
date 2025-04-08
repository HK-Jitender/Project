import Joi from 'joi';
import httpStatus from 'http-status';
import ApiError from '../helper/ApiError.js';

class ProductValidator {
    // Validate product data for create/update
    async validateProductData(req, res, next) {
        const schema = Joi.object({
            name: Joi.string().required().max(255),
            price: Joi.number().required(),
            unit: Joi.string().required().max(50),
            barcode: Joi.string().required().max(255),
            stock: Joi.number().required(),
            imageURL: Joi.string().optional().max(255),
            categoryId: Joi.number().required(),  // Ensure categoryId is valid
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

    // Validate product ID for get and delete operations
    async validateProductId(req, res, next) {
        const schema = Joi.object({
            id: Joi.number().required(),
        });

        const { error, value } = schema.validate(req.params);
        if (error) {
            const errorMessage = error.details.map((details) => details.message).join(', ');
            next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
        } else {
            req.params = value;
            next();
        }
    }
}

export default ProductValidator;
