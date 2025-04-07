import httpStatus from 'http-status';
import PermissionService from '../service/PermissionService.js'; // Import the Permission service
import logger from '../config/logger.js'; // Logger for error handling

class PermissionController {
    constructor() {
        this.permissionService = new PermissionService(); // Initialize the service
    }

    // Create a new permission
    createPermission = async (req, res) => {
        try {
            const permissionData = req.body; // Get the permission data from the request body
            const result = await this.permissionService.createPermission(permissionData);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Update an existing permission
    updatePermission = async (req, res) => {
        try {
            const { id } = req.params; // Get the ID from the URL
            const permissionData = req.body; // Get the updated permission data from the body
            const result = await this.permissionService.updatePermission(id, permissionData); // Pass both ID and data to service
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get a permission by route
    getPermissionByRoute = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.permissionService.getPermissionByRoute(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get all permissions
    getAllPermissions = async (req, res) => {
        try {
            const result = await this.permissionService.getAllPermissions();
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Delete a permission
    deletePermission = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.permissionService.deletePermission(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

export default PermissionController;
