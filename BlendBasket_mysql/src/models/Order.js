import { EntitySchema } from 'typeorm';

const Order = new EntitySchema({
  name: 'Order',
  tableName: 'orders', // Table name in the database
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    customerId: {
      type: Number,
      nullable: false,
    },
    total: {
      type: 'decimal',
      nullable: false,
    },
    status: {
      type: String,
      nullable: false,
      enum: ['Order confirmed', 'Picking', 'Checking out', 'Delivered', 'Cancel'],
    },
    delivery: {
      type: String,
      nullable: false,
    },
    paymentMethod: {
      type: String,
      nullable: false,
    },
    createdAt: {
      type: Date,
      default: () => 'CURRENT_TIMESTAMP',
    },
    updatedAt: {
      type: Date,
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
  relations: {
    customer: {
      type: 'many-to-one',
      target: 'User', // Reference to User model
      joinColumn: {
        name: 'customerId',
        referencedColumnName: 'id',
      },
    },
    items: {
      type: 'one-to-many',
      target: 'OrderItem', // Reference to OrderItem model
      cascade: true,
      mappedBy: 'order',
    },
    orderSummary: {
      type: 'one-to-many',
      target: 'OrderSummary', // Reference to OrderSummary model
      cascade: true,
      mappedBy: 'order',
    },
  },
});

export default Order;
