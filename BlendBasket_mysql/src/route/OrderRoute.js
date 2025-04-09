import express from 'express';
import OrderController from '../controllers/OrderController.js';
import OrderValidator from '../validator/OrderValidator.js';

const router = express.Router();
const orderController = new OrderController();
const orderValidator = new OrderValidator();

// Routes for Order operations
router.post('/orders',
  orderValidator.validateOrderData,
  orderController.createOrder
);

router.get('/orders',
  orderController.getAllOrders
);

router.get('/orders/:id',
  orderController.getOrderById
);

router.put('/orders/:id',
  orderValidator.validateOrderData,
  orderController.updateOrder
);

router.delete('/orders/:id',
  orderController.deleteOrder
);

export default router;

