import PermissionDao from '../dao/PermissionDao.js'; // Import the Permission DAO
import responseHandler from '../helper/responseHandler.js'; // Handle responses
import httpStatus from 'http-status'; // HTTP status codes

class PermissionService {
    constructor() {
        this.permissionDao = new PermissionDao();
    }

    // Create a new permission
    async createPermission(permissionData) {
        try {
            const existingPermission = await this.permissionDao.findOne({ route: permissionData.route });
            if (existingPermission) {
                return responseHandler.returnError(
                    httpStatus.BAD_REQUEST,
                    'Permission with this route already exists!'
                );
            }
            const newPermission = await this.permissionDao.save(permissionData);
            return responseHandler.returnSuccess(
                httpStatus.CREATED,
                'Permission created successfully!',
                newPermission
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Update an existing permission
    async updatePermission(id, permissionData) {
        try {
            const existingPermission = await this.permissionDao.findOne({ id });
            if (!existingPermission) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Permission not found!');
            }
            const updatedPermission = await this.permissionDao.save({ ...existingPermission, ...permissionData });
            return responseHandler.returnSuccess(
                httpStatus.OK,
                'Permission updated successfully!',
                updatedPermission
            );
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Get a permission by route or ID
    async getPermissionByRoute(id) {
        try {
            const permission = await this.permissionDao.findOne({ id });
            if (!permission) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Permission not found!');
            }
            return responseHandler.returnSuccess(httpStatus.OK, 'Permission found!', permission);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Get all permissions
    async getAllPermissions() {
        try {
            const permissions = await this.permissionDao.findAll();
            return responseHandler.returnSuccess(httpStatus.OK, 'Permissions retrieved successfully!', permissions);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }

    // Delete a permission by ID
    async deletePermission(id) {
        try {
            const permission = await this.permissionDao.findOne({ id });
            if (!permission) {
                return responseHandler.returnError(httpStatus.NOT_FOUND, 'Permission not found!');
            }
            await this.permissionDao.remove({ id });
            return responseHandler.returnSuccess(httpStatus.NO_CONTENT, 'Permission deleted successfully!');
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
        }
    }
}

export default PermissionService;
