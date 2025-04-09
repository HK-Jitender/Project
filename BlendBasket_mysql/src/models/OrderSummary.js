import { EntitySchema } from 'typeorm';

const OrderSummary = new EntitySchema({
  name: 'OrderSummary',
  tableName: 'order_summaries',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    subtotal: {
      type: 'decimal',
      nullable: false,
    },
    serviceFee: {
      type: 'decimal',
      nullable: false,
    },
    overWeightFee: {
      type: 'decimal',
      nullable: false,
    },
    orderId: {
        type: Number, // Assuming categoryId is a number
        nullable: false,
    },
    
  },
  relations: {
    order: {
      type: 'many-to-one',
      target: 'Order', // Reference to Order model
      joinColumn: {
        name: 'orderId',
        referencedColumnName: 'id',
      },
    },
  },
});

export default OrderSummary;
