import Joi from 'joi';
import httpStatus from 'http-status';
import ApiError from '../helper/ApiError.js';

class ProductCategoryValidator {
    // Validate product category data for create/update
    async validateProductCategoryData(req, res, next) {
        const schema = Joi.object({
            name: Joi.string().required().max(255),
            description: Joi.string().max(255).optional(),
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

    // Validate product category ID for get and delete operations
    async validateProductCategoryId(req, res, next) {
        const schema = Joi.object({
            id: Joi.string().required(),
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

export default ProductCategoryValidator;
