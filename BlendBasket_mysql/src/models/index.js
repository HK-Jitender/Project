import fs from 'fs'; // Use import instead of require
import path from 'path'; // Use import instead of require
import { DataSource } from 'typeorm'; // Import DataSource from TypeORM
import { fileURLToPath, pathToFileURL } from 'url'; // Import fileURLToPath to convert URLs

// Get the current directory name from import.meta.url
const __filename = fileURLToPath(import.meta.url); // Convert to file path
const __dirname = path.dirname(__filename); // Get the directory name

console.log('Current directory:', __dirname); // Debugging output

const env = process.env.NODE_ENV || 'development';
import config from '../config/database.js'; // Ensure to include .js extension

const db = {};

// Read all model files and add them to the entities array
const entities = fs.readdirSync(__dirname) // Use __dirname directly
    .filter((file) => {
        return file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js';
    })
    .map((file) => {
        // Convert the file path to file URL
        const fileUrl = pathToFileURL(path.join(__dirname, file)).href; // Convert to file:// URL
        return import(fileUrl).then((module) => module.default); // Dynamically import and return the model
    });

// Create a new DataSource instance
const dataSource = new DataSource({
    type: config.type, // e.g., 'mysql', 'postgres', etc.
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    synchronize: true, // Set to false in production
    logging: false,
    entities: await Promise.all(entities),
    name: config.name // Wait for all models to be loaded
});

// Initialize the DataSource
await dataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });

db.dataSource = dataSource; // Add the DataSource to the db object

export default db;
