import db from '../models/index.js'; // Import the db instance
import Permission from '../models/Permission.js'; // Import the Permission entity
import SuperDao from './SuperDao.js'; // Base DAO class

class PermissionDao extends SuperDao {
    constructor() {
        super(Permission); // Initialize with Permission entity
        this.setRepository(db.getRepository(Permission)); // Set the repository using TypeORM dataSource
    }

    // Find a permission by a condition (e.g., by ID or route)
    async findOne(where) {
        return await this.repository.findOne({ where });
    }

    // Get all permissions
    async findAll() {
        return await this.repository.find();
    }

    // Save a new permission (create or update)
    async save(permissionData) {
        return await this.repository.save(permissionData);
    }

    // Remove a permission by a condition
    async remove(where) {
        return await this.repository.delete(where);
    }
}

export default PermissionDao;
