import db from '../models/index.js'; // Assuming db is your TypeORM connection
import RolePermission from '../models/RolePermission.js'; // RolePermission model

class RolePermissionDao {
    constructor() {
        this.repository = db.getRepository(RolePermission); // Access repository
    }

    // Save a new RolePermission relation
    async save(rolePermissionData) {
        return await this.repository.save(rolePermissionData);
    }

    // Find all RolePermissions by roleId
    async findByRoleId(roleId) {
        return await this.repository.find({ where: { roleId } });
    }
    async findAll() {
        return await this.repository.find();
    }
     // Update RolePermission based on id
     async update(id, rolePermissionData) {
        // Find the RolePermission by id
        const rolePermission = await this.repository.find({ where: { id } });

        if (!rolePermission) {
            throw new Error('RolePermission not found');
        }

        // Update the fields with new data from rolePermissionData
        if (rolePermissionData.roleId) {
            rolePermission.roleId = rolePermissionData.roleId;
        }
        if (rolePermissionData.permissionId) {
            rolePermission.permissionId = rolePermissionData.permissionId;
        }

        // Save the updated RolePermission
        return await this.repository.save(rolePermission);
    }

    // Find all RolePermissions by permissionId
    async findById(id) {
        return await this.repository.find({ where: { id } });
    }

    // Delete RolePermission relation by roleId and permissionId
    async deleteByRoleAndPermission(roleId, permissionId) {
        return await this.repository.delete({ roleId, permissionId });
    }

    // Remove RolePermission by id
    async remove(id) {
        return await this.repository.delete(id);
    }
}

export default RolePermissionDao;
