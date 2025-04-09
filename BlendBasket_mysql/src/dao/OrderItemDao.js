import db from '../models/index.js';
import OrderItem from '../models/OrderItem.js';
import SuperDao from './SuperDao.js';

class OrderItemDao extends SuperDao {
  constructor() {
    super(OrderItem);
    this.setRepository(db.getRepository(OrderItem));
  }

  async save(orderItemData) {
    return await this.repository.save(orderItemData);
  }

  async findByOrderId(orderId) {
    return await this.repository.find({ where: { orderId } });
  }

  async remove(orderItemId) {
    return await this.repository.delete(orderItemId);
  }
}

export default OrderItemDao;
