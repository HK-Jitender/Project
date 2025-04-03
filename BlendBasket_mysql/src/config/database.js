// Function to get the directory name from import.meta.url
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
    type: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Hardkore@123',
    database: process.env.DB_NAME || 'blendBasket_test',
    synchronize: false,  // Set to false in production
    logging: true,
    name:'default',
    entities: [
      path.join(__dirname, '../models/*.js'),  // Use path.join for cross-platform compatibility
    ],
    migrations: [
      path.join(__dirname, '../db/migrations/*.js'), // Use path.join for cross-platform compatibility
    ],
    cli: {
      migrationsDir: 'src/db/migrations',
    },
};
  