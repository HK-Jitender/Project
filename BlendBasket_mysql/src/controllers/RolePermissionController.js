import httpStatus from 'http-status';
import RolePermissionService from '../service/RolePermissionService.js'; // Import the RolePermission service
import logger from '../config/logger.js'; // Logger for error handling

class RolePermissionController {
    constructor() {
        this.rolePermissionService = new RolePermissionService(); // Initialize the service
    }

    // Create a new RolePermission
    createRolePermission = async (req, res) => {
        try {
            const rolePermissionData = req.body; // Get the role-permission data from the request body
            const result = await this.rolePermissionService.createRolePermission(rolePermissionData.roleId,rolePermissionData.permissionId  );
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Update an existing RolePermission
    updateRolePermission = async (req, res) => {
        try {
            const { id } = req.params; // Get the ID from the URL
            const rolePermissionData = req.body; // Get the updated role-permission data from the body
            const result = await this.rolePermissionService.updateRolePermission(id, rolePermissionData);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    getAllRolePermissions = async (req, res) => {
        try {
            const result = await this.rolePermissionService.getAllRolePermissions();
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get a specific RolePermission by roleId and permissionId
    getRolePermission = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.rolePermissionService.getRolePermission(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Delete a RolePermission
    deleteRolePermission = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.rolePermissionService.deleteRolePermission(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

export default RolePermissionController;
