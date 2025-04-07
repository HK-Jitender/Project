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
});

export default Permission;
