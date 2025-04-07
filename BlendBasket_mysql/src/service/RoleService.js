import RoleDao from '../dao/RoleDao.js'; // Import the Role DAO
import responseHandler from '../helper/responseHandler.js'; // Handle responses
import httpStatus from 'http-status'; // HTTP status codes

class RoleService {
    constructor() {
        this.roleDao = new RoleDao();
    }

    // Create a new role
    async createRole(roleData) {
        try {
            const existingRole = await this.roleDao.findOne({ code: roleData.code });
            if (existingRole) {
                return responseHandler.returnError(
                    httpStatus.BAD_REQUEST,
                    'Role code already exists!'
                );
            }
            const newRole = await this.roleDao.save(roleData);
            return responseHandler.returnSuccess(
                httpStatus.CREATED,
                'Role created successfully!',
                newRole
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Update an existing role
    async updateRole(id, roleData) {
        try {
            const existingRole = await this.roleDao.findOne({ id });
            if (!existingRole) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Role not found!');
            }
            // Update role with new data
            const updatedRole = await this.roleDao.save({ ...existingRole, ...roleData });
            return responseHandler.returnSuccess(
                httpStatus.OK,
                'Role updated successfully!',
                updatedRole
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }


    // Get a role by code or ID
    async getRoleByCode(id) {
        try {
            const role = await this.roleDao.findOne({ id });
            if (!role) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Role not found!');
            }
            return responseHandler.returnSuccess(httpStatus.OK, 'Role found!', role);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Get all roles
    async getAllRoles() {
        try {
            const roles = await this.roleDao.findAll();
            return responseHandler.returnSuccess(httpStatus.OK, 'Roles retrieved successfully!', roles);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Delete a role
    async deleteRole(id) {
        try {
            const role = await this.roleDao.findOne({ id });
            if (!role) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Role not found!');
            }
            await this.roleDao.remove({ id });
            return responseHandler.returnSuccess(httpStatus.NO_CONTENT, 'Role deleted successfully!');
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }
}

export default RoleService;
