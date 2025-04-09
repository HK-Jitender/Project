import db from '../models/index.js';
import OrderSummary from '../models/OrderSummary.js';
import SuperDao from './SuperDao.js';

class OrderSummaryDao extends SuperDao {
  constructor() {
    super(OrderSummary);
    this.setRepository(db.getRepository(OrderSummary));
  }

  async save(orderSummaryData) {
    return await this.repository.save(orderSummaryData);
  }

  async findByOrderId(orderId) {
    return await this.repository.find({ where: { orderId } });
  }

  async remove(orderSummaryId) {
    return await this.repository.delete(orderSummaryId);
  }
}

export default OrderSummaryDao;
    