import OrderDao from '../dao/OrderDao.js';
import OrderItemDao from '../dao/OrderItemDao.js';
import OrderSummaryDao from '../dao/OrderSummaryDao.js';
import responseHandler from '../helper/responseHandler.js';
import httpStatus from 'http-status';

class OrderService {
  constructor() {
    this.orderDao = new OrderDao();
    this.orderItemDao = new OrderItemDao();
    this.orderSummaryDao = new OrderSummaryDao();
  }

//   async createOrder(orderData) {
//     try {
//       const { items, orderSummary } = orderData;
//       const order = await this.orderDao.save(orderData);

//       // Save items
//       for (let item of items) {
//         item.orderId = order.id;
//         await this.orderItemDao.save(item);
//       }

//       // Save order summary
//       for (let summary of orderSummary) {
//         summary.orderId = order.id;
//         await this.orderSummaryDao.save(summary);
//       }

//       return responseHandler.returnSuccess(httpStatus.CREATED, 'Order created successfully!', order);
//     } catch (e) {
//       return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
//     }
//   }
async createOrder(orderData) {
    try {
      // Step 1: Extract the Order, Items, and Summary data from the payload
      const { items, orderSummary, ...orderDetails } = orderData;
  
      // Step 2: Save the Order details (Order entity)
      const order = await this.orderDao.save(orderDetails);
  
      // Ensure the order was created successfully
      if (!order || !order.id) {
        throw new Error('Order creation failed');
      }
  
      // Step 3: Map the Order ID to OrderItems and OrderSummary before saving
  
      // Assign the generated orderId to each item
      const itemsWithOrderId = items.map(item => ({
        ...item,
        orderId: order.id // Assign the orderId to each item
      }));
  
      // Assign the generated orderId to each orderSummary
      const orderSummaryWithOrderId = orderSummary.map(summary => ({
        ...summary,
        orderId: order.id // Assign the orderId to each summary
      }));
  
      // Step 4: Save the items and order summary
      await this.orderItemDao.save(itemsWithOrderId);  // Save all items at once
      await this.orderSummaryDao.save(orderSummaryWithOrderId);  // Save all summaries at once
  
      // Step 5: Return success response with the created order
      return responseHandler.returnSuccess(httpStatus.CREATED, 'Order created successfully!', order);
    } catch (e) {
      console.error('Error while creating order:', e);
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }
  

  async getOrderById(id) {
    try {
      const order = await this.orderDao.findById(id);
      if (!order) {
        return responseHandler.returnError(httpStatus.NOT_FOUND, 'Order not found');
      }
      return responseHandler.returnSuccess(httpStatus.OK, 'Order retrieved successfully', order);
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }

  async updateOrder(id, orderData) {
    try {
      const updatedOrder = await this.orderDao.update(id, orderData);
      return responseHandler.returnSuccess(httpStatus.OK, 'Order updated successfully!', updatedOrder);
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }

  async deleteOrder(id) {
    try {
      await this.orderDao.remove(id);
      return responseHandler.returnSuccess(httpStatus.NO_CONTENT, 'Order deleted successfully!');
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }

  async getAllOrders() {
    try {
      const orders = await this.orderDao.findAll();
      return responseHandler.returnSuccess(httpStatus.OK, 'Orders retrieved successfully!', orders);
    } catch (e) {
      return responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something went wrong!');
    }
  }
}

export default OrderService;
