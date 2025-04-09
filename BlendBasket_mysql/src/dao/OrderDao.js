import db from '../models/index.js';
import Order from '../models/Order.js';
import SuperDao from './SuperDao.js';

class OrderDao extends SuperDao {
  constructor() {
    super(Order);
    this.setRepository(db.getRepository(Order));
  }

  async save(orderData) {
    return await this.repository.save(orderData);
  }

async findAll() {
  try {
    const orders = await this.repository.find();
    return orders; // Return the raw orders without relations
  } catch (e) {
    console.error('Error in findAll:', e.message);
    throw e;
  }
}


  async findById(id) {
    try {
      // Fetching a single order along with its items and order summary
      return await this.repository.findOne({
        where: { id },
        relations: ['items', 'orderSummary'], // Ensure these are correct
      });
    } catch (e) {
      console.error('Error fetching order by ID:', e.message);
      throw e;
    }
  }
  
  async update(id, orderData) {
    return await this.repository.update(id, orderData);
  }

  async remove(id) {
    return await this.repository.delete(id);
  }
}

export default OrderDao;
