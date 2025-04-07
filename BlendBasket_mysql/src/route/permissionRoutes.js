import express from 'express';
import PermissionController from '../controllers/PermissionController.js'; // Import the Permission controller
import PermissionValidator from '../validator/PermissionValidator.js'; // Import the Permission validator

const router = express.Router();
const permissionController = new PermissionController(); // Initialize the controller
const permissionValidator = new PermissionValidator(); // Initialize the validator

// Routes

// Create a new permission
router.post('/permissions', permissionValidator.validatePermissionData, permissionController.createPermission);

// Update an existing permission
router.put('/permissions/:id', permissionValidator.validatePermissionData, permissionController.updatePermission);

// Get a permission by route
router.get('/permissions/:id', permissionValidator.validatePermissionRoute, permissionController.getPermissionByRoute);

// Get all permissions
router.get('/permissions', permissionController.getAllPermissions);

// Delete a permission
router.delete('/permissions/:id', permissionValidator.validatePermissionId, permissionController.deletePermission);

export default router;
