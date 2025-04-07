import httpStatus from 'http-status'; // HTTP status codes
import RoleService from '../service/RoleService.js'; // Import the Role service
import logger from '../config/logger.js'; // Logger for error handling

class RoleController {
    constructor() {
        this.roleService = new RoleService();
    }

    // Create a new role
    createRole = async (req, res) => {
        try {
            const roleData = req.body; // Get the role data from the request body
            const result = await this.roleService.createRole(roleData);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Update an existing role
    updateRole = async (req, res) => {
        try {
            const { id } = req.params; // Get the ID from the URL
            const roleData = req.body; // Get the updated role data from the body
            const result = await this.roleService.updateRole(id, roleData); // Pass both ID and data to service
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get a role by code
    getRoleByCode = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.roleService.getRoleByCode(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Get all roles
    getAllRoles = async (req, res) => {
        try {
            const result = await this.roleService.getAllRoles();
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

    // Delete a role
    deleteRole = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.roleService.deleteRole(id);
            res.status(result.statusCode).send(result.response);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

export default RoleController;
