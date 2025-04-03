import express from 'express'; 
import authRoute from './authRoute.js'; 
// const authRoute = require('./authRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default  router;
