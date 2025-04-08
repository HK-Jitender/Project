import Joi from 'joi'; // Use Joi for validation
import httpStatus from 'http-status'; // Use HTTP status codes
import ApiError from '../helper/ApiError.js'; // Custom error handler

class RolePermissionValidator {
    // Validate role permission data for create/update
    async validateRolePermissionData(req, res, next) {
        const schema = Joi.object({
            roleId: Joi.string().required(), // Role ID is required
            permissionId: Joi.string().required(), // Permission ID is required
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

    // Validate roleId and permissionId for get and delete operations
    async validateRolePermissionId(req, res, next) {
        const schema = Joi.object({
            id: Joi.string().required(), // Role ID must be a string
            // permissionId: Joi.string().required(), // Permission ID must be a string
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

export default RolePermissionValidator;
