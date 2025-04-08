import { EntitySchema } from 'typeorm';

const RolePermission = new EntitySchema({
    name: "RolePermission", // Name of the entity
    tableName: "role_permissions", // Table name for the junction table
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true, // Auto-incrementing primary key
        },
        roleId: {
            type: String,
        },
        permissionId: {
            type: String,
        },
    },
    relations: {
        role: {
            type: "many-to-one",
            target: "Role", // Reference to Role entity
            joinColumn: true, // Foreign key for role
        },
        permission: {
            type: "many-to-one",
            target: "Permission", // Reference to Permission entity
            joinColumn: true, // Foreign key for permission
        },
    },
});

export default RolePermission;
