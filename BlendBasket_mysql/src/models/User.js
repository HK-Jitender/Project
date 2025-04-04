import { EntitySchema } from 'typeorm';

const User = new EntitySchema({
    name: "User", // Name of the entity
    tableName: "users", // Optional: specify the table name
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        uuid: {
            type: String, // UUID will be stored as a string
        },
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        status: {
            type: Number,
        },
        email_verified: {
            type: Number,
        },
        address: {
            type: String,
        },
        phone_number: {
            type: String,
        },
    },
});

export default User;
