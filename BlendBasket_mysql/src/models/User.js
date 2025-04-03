// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//           //  User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
//         }
//     }

//     User.init(
//         {
//             uuid: DataTypes.UUID,
//             first_name: DataTypes.STRING,
//             last_name: DataTypes.STRING,
//             email: DataTypes.STRING,
//             password: DataTypes.STRING,
//             status: DataTypes.INTEGER,
//             email_verified: DataTypes.INTEGER,
//             address: DataTypes.STRING,
//             phone_number: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: 'user',
//             underscored: true,
//         },
//     );
//     return User;
// };
// src/models/User.js (TypeORM)
// src/models/User.js
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

export default  User;


