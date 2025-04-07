import express from 'express';
import authRoute from './authRoute.js';
import roleRoute from './roleRoute.js';
import permissioRoute from './permissionRoutes.js'
// const authRoute = require('./authRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    }, 
    {
        path: '/role',
        route:roleRoute,
    },
    {
        path: '/permission',
        route:permissioRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
