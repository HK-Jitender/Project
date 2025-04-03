import 'reflect-metadata';  // Ensure reflect-metadata is imported first
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import httpStatus from 'http-status';
import routes from './route/index.js';  // Import your routes
import { jwtStrategy } from './config/passport.js';
import { errorConverter, errorHandler } from './middlewares/error.js';
import ApiError from './helper/ApiError.js';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import User from './models/User.js'

dotenv.config();  // Load environment variables

process.env.PWD = process.cwd();

const app = express();

// Enable CORS
app.use(cors());
app.options('*', cors());

app.use(express.static(`${process.env.PWD}/public`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// JWT authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// // TypeORM Database Connection
// const AppDataSource = new DataSource({
//     type: 'mysql',  // Can be 'postgres', 'mariadb', 'sqlite', etc.
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 3306,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     synchronize: false,  // Use false in production for data safety
//     logging: true,
//     entities: [User],  // Specify your entities here
//     migrations: [],
//     subscribers: [],
// });

// AppDataSource.initialize()
//     .then(() => {
//         console.log('Database connected with TypeORM');
//     })
//     .catch((error) => {
//         console.error('Database connection failed:', error);
//     });

// app.get('/', async (req, res) => {
//     res.status(200).send('Congratulations! API is working!');
// });
app.use('/api', routes);

// Send back a 404 error for any unknown API request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Convert error to ApiError, if needed
app.use(errorConverter);

// Handle errors
app.use(errorHandler);

export default app;
