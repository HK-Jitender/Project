import express from 'express';
import RolePermissionController from '../controllers/RolePermissionController.js'; // Import the RolePermission controller
import RolePermissionValidator from '../validator/RolePermissionValidator.js'; // Import the RolePermission validator

const router = express.Router();
const rolePermissionController = new RolePermissionController(); // Initialize the controller
const rolePermissionValidator = new RolePermissionValidator(); // Initialize the validator

// Routes

// Create a new RolePermission
router.post('/role-permissions', rolePermissionValidator.validateRolePermissionData, rolePermissionController.createRolePermission);

// Update an existing RolePermission
router.put('/role-permissions/:id', rolePermissionValidator.validateRolePermissionData, rolePermissionController.updateRolePermission);

// Get all RolePermissions
router.get('/role-permissions', rolePermissionController.getAllRolePermissions);

// Get a specific RolePermission by roleId and permissionId
router.get('/role-permissions/:id', rolePermissionValidator.validateRolePermissionId, rolePermissionController.getRolePermission);

// Delete a RolePermission
router.delete('/role-permissions/:id', rolePermissionValidator.validateRolePermissionId, rolePermissionController.deleteRolePermission);
router.get('/role-permissions', rolePermissionController.getAllRolePermissions);
export default router;
