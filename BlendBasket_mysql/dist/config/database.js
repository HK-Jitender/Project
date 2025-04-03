"use strict";

// const config = require('./config');

// module.exports = {
//     development: {
//         username: config.dbUser,
//         password: config.dbPass,
//         database: config.dbName,
//         host: config.dbHost,
//         dialect: 'mysql',
//         dialectOptions: {
//             bigNumberStrings: true,
//         },
//     },
//     test: {
//         username: config.dbUser,
//         password: config.dbPass,
//         database: config.dbName,
//         host: config.dbHost,
//         dialect: 'mysql',
//         dialectOptions: {
//             bigNumberStrings: true,
//         },
//     },
//     production: {
//         username: config.dbUser,
//         password: config.dbPass,
//         database: config.dbName,
//         host: config.dbHost,
//         port: config.port,
//         dialect: 'mysql',
//         dialectOptions: {
//             bigNumberStrings: true,
//         },
//     },
// };

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'your-database',
  synchronize: true,
  // Set to false in production
  logging: true,
  entities: [__dirname + '/../models/*.js' // Ensure correct path
  ],
  migrations: [__dirname + '/../db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
};