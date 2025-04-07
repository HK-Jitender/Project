import db from '../models/index.js'; // Import the db instance
import Role from '../models/Role.js'; // Import the Role entity
import SuperDao from './SuperDao.js'; // Base DAO class

class RoleDao extends SuperDao {
    constructor() {
        super(Role); // Initialize with Role entity
        this.setRepository(db.getRepository(Role)); // Set the repository using TypeORM dataSource
    }

    // Find a role by a condition (e.g., by ID or code)
    async findOne(where) {
        return await this.repository.findOne({ where });
    }

    // Get all roles
    async findAll() {
        return await this.repository.find();
    }

    // Save a new role (create or update)
    async save(roleData) {
        return await this.repository.save(roleData);
    }

    // Update an existing role
    async update(roleData) {
        const existingRole = await this.findOne({ code: roleData.code }); // Assuming `code` is the unique identifier
        if (!existingRole) {
            throw new Error('Role not found'); // Handle the case where the role doesn't exist
        }
        return await this.repository.update({ code: roleData.code }, roleData); // Update the role
    }

    // Remove a role by a condition
    async remove(where) {
        return await this.repository.delete(where);
    }
}

export default RoleDao;
