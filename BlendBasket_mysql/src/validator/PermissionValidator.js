import Joi from 'joi'; // Use Joi for validation
import httpStatus from 'http-status'; // Use HTTP status codes
import ApiError from '../helper/ApiError.js'; // Import custom error handler

class PermissionValidator {
    // Validate permission data for create/update
    async validatePermissionData(req, res, next) {
        const schema = Joi.object({
            name: Joi.string().required().max(255), // Ensure the permission name is not empty and not too long
            route: Joi.string().required().max(255), // Ensure the route is provided and not too long
            description: Joi.string().max(255).optional(), // Optional description field
        });

        const options = {
            abortEarly: false, // Include all errors in the response
            allowUnknown: true, // Ignore unknown properties
            stripUnknown: true, // Remove unknown properties
        };

        const { error, value } = schema.validate(req.body, options);
        if (error) {
            const errorMessage = error.details.map((details) => details.message).join(', ');
            next(new ApiError(httpStatus.BAD_REQUEST, errorMessage)); // Return the validation error
        } else {
            req.body = value; // Replace req.body with the validated data
            next(); // Proceed to the next middleware
        }
    }

    // Validate permission ID for get and delete operations
    async validatePermissionId(req, res, next) {
        const schema = Joi.object({
            id: Joi.string().required(), // Ensure the ID is a required string
        });

        const { error, value } = schema.validate(req.params);
        if (error) {
            const errorMessage = error.details.map((details) => details.message).join(', ');
            next(new ApiError(httpStatus.BAD_REQUEST, errorMessage)); // Return the validation error
        } else {
            req.params = value; // Replace req.params with the validated data
            next(); // Proceed to the next middleware
        }
    }

    // Validate permission route for get operation
    async validatePermissionRoute(req, res, next) {
        const schema = Joi.object({
            id: Joi.string().required(), // Ensure the route is a required string
        });

        const { error, value } = schema.validate(req.params);
        if (error) {
            const errorMessage = error.details.map((details) => details.message).join(', ');
            next(new ApiError(httpStatus.BAD_REQUEST, errorMessage)); // Return the validation error
        } else {
            req.params = value; // Replace req.params with the validated data
            next(); // Proceed to the next middleware
        }
    }
}

export default PermissionValidator;
