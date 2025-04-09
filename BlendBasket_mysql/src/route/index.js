import express from 'express';
import authRoute from './authRoute.js';
import roleRoute from './roleRoute.js';
import permissioRoute from './permissionRoutes.js'
import rolePermissionRoute from'./rolePermissionRoute.js'
import productCategoryRoute from './productCategoryRoutes.js';
import productRoute from './productRoutes.js';
import productReview from './productReviewRoutes.js';
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
    {
        path: '/rolePermission',
        route:rolePermissionRoute,
    },
    {
        path: '/productCategory',
        route:productCategoryRoute,
    },
    {
        path: '/product',
        route:productRoute,
    },
    {
        path: '/productReview',
        route:productReview,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
