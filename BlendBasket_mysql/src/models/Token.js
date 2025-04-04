// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//     class Token extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//     }

//     Token.init(
//         {
//             token: DataTypes.STRING,
//             user_uuid: DataTypes.UUID,
//             type: DataTypes.STRING,
//             expires: DataTypes.DATE,
//             blacklisted: DataTypes.BOOLEAN,
//         },
//         {
//             sequelize,
//             modelName: 'token',
//             underscored: true,
//         },
//     );
//     return Token;
// };

import { EntitySchema } from 'typeorm'; // Import the EntitySchema class from TypeORM

const Token = new EntitySchema({
    name: "Token", // Name of the entity (Class name)
    tableName: "tokens", // The name of the table in the database
    columns: {
        id: {
            type: Number, // UUID for primary key
            primary: true, // Mark as primary key
         generated: true, // Automatically generate UUIDs
        },
        token: {
            type: String, // Token as a string (e.g., JWT token)
            length: 255, // Set length for token if needed
        },
        // user_uuid: {
        //     type: 'uuid', // UUID to link to a user
        // },
        type: {
            type: String, // Type of the token (e.g., 'access', 'refresh')
            length: 255, // Set length if needed
        },
        expires: {
            type: 'timestamp', // Timestamp for token expiration
        },
        blacklisted: {
            type: 'boolean', // Whether the token is blacklisted
        },
    },
});

export default Token;
