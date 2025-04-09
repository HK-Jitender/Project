import OrderService from '../service/OrderService.js';
import logger from '../config/logger.js';
import httpStatus from 'http-status';
import OrderValidator from '../validator/OrderValidator.js';

class OrderController {
  constructor() {
    this.orderService = new OrderService();
    this.orderValidator = new OrderValidator();
  }

  createOrder = async (req, res) => {
    try {
      const orderData = req.body;
      const result = await this.orderService.createOrder(orderData);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.orderService.getOrderById(id);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  updateOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const orderData = req.body;
      const result = await this.orderService.updateOrder(id, orderData);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.orderService.deleteOrder(id);
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  getAllOrders = async (req, res) => {
    try {
      const result = await this.orderService.getAllOrders();
      res.status(result.statusCode).send(result.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

export default OrderController;
