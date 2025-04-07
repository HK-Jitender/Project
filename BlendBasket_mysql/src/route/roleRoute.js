import express from 'express'; // Import express
import RoleController from '../controllers/RoleController.js'; // Import the Role controller
import RoleValidator from '../validator/RoleValidator.js'; // Import the Role validator

const router = express.Router(); // Create the router
const roleController = new RoleController(); // Initialize the controller
const roleValidator = new RoleValidator(); // Initialize the validator

// Routes

// Create a new role
router.post('/roles', roleValidator.validateRoleData, roleController.createRole); // Create a new role

// Update an existing role
router.put('/roles/:id', roleValidator.validateRoleData, roleController.updateRole); // Update a role

// Get a role by code
router.get('/roles/:id', roleValidator.validateRoleCode, roleController.getRoleByCode); // Get a role by code

// Get all roles
router.get('/roles', roleController.getAllRoles); // Get all roles

// Delete a role
router.delete('/roles/:id', roleValidator.validateRoleCode, roleController.deleteRole); // Delete a role

export default router;
