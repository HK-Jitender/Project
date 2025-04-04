import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
    type: 'mysql', // MySQL, Postgres, etc.
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Hardkore@123',
    database: process.env.DB_NAME || 'blendBasket_test',
    synchronize: false,  // Set to false in production
    logging: true,
    name: 'default',
    entities: [
        path.join(__dirname, '../models/*.js'),  // Path to your model files
    ],
    migrations: [
        path.join(__dirname, '../db/migrations/*.ts'), // Path to your migrations
    ],
    cli: {
        migrationsDir: 'src/db/migrations', // Directory for CLI to create migrations
    },
};
