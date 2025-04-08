import { EntitySchema } from 'typeorm';

const Role = new EntitySchema({
    name: "Role", // Name of the entity
    tableName: "roles", // Optional: specify the table name
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        code: {
            type: String,
            unique: true, // Ensure that role codes are unique
        },
        name: {
            type: String,
        },
        description: {
            type: String,
            nullable: true, // Description can be optional
        },
        weight: {
            type: Number,
            nullable: true, // Weight can be optional
        },
    },
    relations: {
        rolePermissions: {
            type: "one-to-many",
            target: "RolePermission", // Relationship with RolePermission table
            inverseSide: "role", // Role is the inverse side
            cascade: true, // Cascade operations (insert, update, delete)
        },
    },
});

export default Role;