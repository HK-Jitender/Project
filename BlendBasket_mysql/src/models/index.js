// index.js

import fs from 'fs';
import path from 'path';
import { DataSource } from 'typeorm';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const db = {};
const env = process.env.NODE_ENV || 'development';
import config from '../config/database.js';

// Read all model files and add them to the entities array synchronously
const entities = fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js')
  .map((file) => {
    const fileUrl = pathToFileURL(path.join(__dirname, file)).href;
    return import(fileUrl).then((module) => module.default);
  });

const loadedEntities = await Promise.all(entities);
console.log('Loaded Entities:', loadedEntities);


const dataSource = new DataSource({
  type: config.type,
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
  database: config.database,
  synchronize: false,
  logging: false,
  entities: loadedEntities,  // Ensure entities are properly loaded
  migrations: [path.join(__dirname, '../db/migrations/*.js')],
  name: config.name,
});

// Initialize the DataSource after loading the entities
await dataSource.initialize();
console.log('Data Source has been initialized!');

export default dataSource;
