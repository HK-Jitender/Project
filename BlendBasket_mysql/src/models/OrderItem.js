import { EntitySchema } from 'typeorm';

const OrderItem = new EntitySchema({
    name: 'OrderItem',
    tableName: 'order_items',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        productId: {
            type: Number,
            nullable: false,
        },
        quantity: {
            type: Number,
            nullable: false,
        },
        price: {
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
        product: {
            type: 'many-to-one',
            target: 'Product', // Reference to Product model
            joinColumn: {
                name: 'productId',
                referencedColumnName: 'id',
            },
        },
    },
});

export default OrderItem;
