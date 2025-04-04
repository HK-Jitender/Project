import fs from 'fs'; 
import path from 'path'; 
import { DataSource } from 'typeorm'; 
import { fileURLToPath, pathToFileURL } from 'url'; 

// Get the current directory name from import.meta.url
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
const db = {};
const env = process.env.NODE_ENV || 'development';
import config from '../config/database.js'; // Import database config

// Read all model files and add them to the entities array
const entities = fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js')
    .map((file) => {
        const fileUrl = pathToFileURL(path.join(__dirname, file)).href; 
        return import(fileUrl).then((module) => module.default);
    });

// Create a new DataSource instance
const dataSource = new DataSource({
    type: config.type, 
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    synchronize: false, 
    logging: false,
    entities: await Promise.all(entities),
    migrations: [path.join(__dirname, '../db/migrations/*.js')],
    name: config.name, 
});
dataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => {
    console.log('Error during Data Source initialization:', error);
  });
  db.dataSource = dataSource;
// Initialize DataSource, but don't call it during migration generation
export default db;
///////-----------------Uper code is sucessfuly creating the migration but not the tables 
// import fs from 'fs';
// import path from 'path';
// import { DataSource } from 'typeorm';
// import { fileURLToPath, pathToFileURL } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const env = process.env.NODE_ENV || 'development';
// import config from '../config/database.js'; // Import database config

// // Read all model files and add them to the entities array
// const entities = fs.readdirSync(__dirname)
//     .filter((file) => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js')
//     .map((file) => {
//         const fileUrl = pathToFileURL(path.join(__dirname, file)).href;
//         return import(fileUrl).then((module) => module.default);
//     });

// // Create and export the DataSource instance
// const dataSource = new DataSource({
//     type: config.type,
//     host: config.host,
//     port: config.port,
//     username: config.username,
//     password: config.password,
//     database: config.database,
//     synchronize: false,  // Set to false for migrations
//     logging: true,  // Enable logging to help with troubleshooting
//     entities: [],  // We'll populate this later
//     migrations: [path.join(__dirname, '../db/migrations/*.js')],
//     name: config.name,
// });

// // Wait for entities to load, then add them to the dataSource instance
// (async () => {
//     const loadedEntities = await Promise.all(entities);
//     dataSource.setOptions({
//         entities: loadedEntities,
//     });

//     // Now that the entities are set, we can initialize the dataSource
//     await dataSource.initialize();
// })().catch((error) => {
//     console.error('Error during data source initialization:', error);
// });

// // Export the dataSource instance
// export default dataSource;
