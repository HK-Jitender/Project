import { EntitySchema } from 'typeorm';

const Permission = new EntitySchema({
    name: "Permission", // Name of the entity
    tableName: "permissions", // Table name in the database
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true, // Auto-generate ID
        },
        name: {
            type: String,
            unique: true, // Ensure permission names are unique
        },
        route: {
            type: String,
            unique: true, // Ensure that the route is unique
        },
        description: {
            type: String,
            nullable: true, // Description can be optional
        },
    },
    relations: {
        rolePermissions: {
            type: "one-to-many",
            target: "RolePermission", // Relationship with RolePermission table
            inverseSide: "permission", // Permission is the inverse side
            cascade: true, // Cascade operations (insert, update, delete)
        },
    },
});

export default Permission;
