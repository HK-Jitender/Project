import db from '../models/index.js'; 
import ProductReview from '../models/ProductReview.js'; 
import SuperDao from './SuperDao.js'; 

class ProductReviewDao extends SuperDao {
  constructor() {
    super(ProductReview);
    this.setRepository(db.getRepository(ProductReview));
  }

  // Find reviews by productId
  async findByProductId(productId) {
    return await this.repository.find({ where: { productId } });
  }

  // Find reviews by userId
  async findByUserId(userId) {
    return await this.repository.find({ where: { userId } });
  }

  // Save a new product review
  async save(productReviewData) {
    return await this.repository.save(productReviewData);
  }

  // Update a product review
  async update(id, productReviewData) {
    const existingReview = await this.repository.findOne({ where: { id } });
    if (!existingReview) {
      throw new Error('Review not found');
    }
    return await this.repository.update(id, productReviewData);
  }

  // Delete a review by id
  async remove(id) {
    return await this.repository.delete({ id });
  }
}

export default ProductReviewDao;
