import RolePermissionDao from '../dao/RolePermissionDao.js'; // RolePermissionDao
import responseHandler from '../helper/responseHandler.js'; // Response handler utility
import httpStatus from 'http-status'; // HTTP status codes

class RolePermissionService {
    constructor() {
        this.rolePermissionDao = new RolePermissionDao();
    }

    // Create a new RolePermission association
    async createRolePermission(roleId, permissionId) {
        try {
            // Check if this role-permission combination already exists
            const existingAssociation = await this.rolePermissionDao.findByRoleId(roleId);
            if (existingAssociation.some(item => item.permissionId === permissionId)) {
                return responseHandler.returnError(httpStatus.BAD_REQUEST, 'This permission is already assigned to the role.');
            }

            const rolePermission = await this.rolePermissionDao.save({ roleId, permissionId });
            return responseHandler.returnSuccess(httpStatus.CREATED, 'Role permission created successfully!', rolePermission);
        } catch (error) {
            return responseHandler.returnError(httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong!');
        }
    }
    
    async updateRolePermission(id, rolePermissionData) {
        try {
            // Check if the RolePermission with the given id exists
            const existingRolePermission = await this.rolePermissionDao.findById(id);
            if (!existingRolePermission) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'RolePermission not found.');
            }

            // Update the role-permission data
            const updatedRolePermission = await this.rolePermissionDao.update(id, rolePermissionData);

            // Return success response with the updated role-permission
            return responseHandler.returnSuccess(httpStatus.OK, 'RolePermission updated successfully!', updatedRolePermission);
        } catch (error) {
            return responseHandler.returnError(httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong!');
        }
    }
    // Delete a RolePermission association
    async deleteRolePermission(id) {
        try {
            await this.rolePermissionDao.deleteByRoleAndPermission(id);
            return responseHandler.returnSuccess(httpStatus.NO_CONTENT, 'Role permission deleted successfully!');
        } catch (error) {
            return responseHandler.returnError(httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong!');
        }
    }

    // Get all permissions for a role
    async getPermissionsByRole(roleId) {
        try {
            const rolePermissions = await this.rolePermissionDao.findByRoleId(roleId);
            return responseHandler.returnSuccess(httpStatus.OK, 'Permissions retrieved successfully!', rolePermissions);
        } catch (error) {
            return responseHandler.returnError(httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong!');
        }
    }
    // async getAllRolePermissions() {
    //     try {
    //         const rolePermissions = await this.rolePermissionDao.findAll(); // Fetch all role-permission associations
    //         return responseHandler.returnSuccess(httpStatus.OK, 'Role permissions retrieved successfully!', rolePermissions);
    //     } catch (error) {
    //         return responseHandler.returnError(httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong!');
    //     }
    // }
    async getAllRolePermissions() {
        try {
            // Fetch all role-permission associations from the DAO
            const rolePermissions = await this.rolePermissionDao.findAll(); 

            // Return the success response with the retrieved data
            return responseHandler.returnSuccess(httpStatus.OK, 'Role permissions retrieved successfully!', rolePermissions);
        } catch (error) {
            // If something goes wrong, return an error response
            return responseHandler.returnError(httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong!');
        }
    }
    // Get all roles for a permission
    async getRolePermission(id) {
        try {
            const rolePermissions = await this.rolePermissionDao.findById(id);
            return responseHandler.returnSuccess(httpStatus.OK, 'Roles retrieved successfully!', rolePermissions);
        } catch (error) {
            return responseHandler.returnError(httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong!');
        }
    }

}

export default RolePermissionService;
