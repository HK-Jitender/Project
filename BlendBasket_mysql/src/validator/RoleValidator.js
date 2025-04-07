import Joi from 'joi'; // Use Joi for validation
import httpStatus from 'http-status'; // Use HTTP status codes
import ApiError from '../helper/ApiError.js'; // Import custom error handler

class RoleValidator {
    // Validate role data for create/update
    async validateRoleData(req, res, next) {
        const schema = Joi.object({
            code: Joi.string().required().max(255), // Ensure code is unique and not too long
            name: Joi.string().required().max(255),
            description: Joi.string().max(255).optional(),
            weight: Joi.number().optional(),
        });

        const options = {
            abortEarly: false, // Include all errors
            allowUnknown: true, // Ignore unknown props
            stripUnknown: true, // Remove unknown props
        };

        const { error, value } = schema.validate(req.body, options);
        if (error) {
            const errorMessage = error.details.map((details) => details.message).join(', ');
            next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
        } else {
            req.body = value; // Replace req.body with validated data
            next();
        }
    }

    // Validate role code for delete and get
    async validateRoleCode(req, res, next) {
        const schema = Joi.object({
            id: Joi.string().required(),
        });

        const { error, value } = schema.validate(req.params);
        if (error) {
            const errorMessage = error.details.map((details) => details.message).join(', ');
            next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
        } else {
            req.params = value; // Replace params with validated data
            next();
        }
    }
}

export default RoleValidator;
