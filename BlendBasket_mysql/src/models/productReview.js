import { EntitySchema } from 'typeorm';

const ProductReview = new EntitySchema({
    name: "ProductReview",
    tableName: "product_reviews", // Table name in the database
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        productId: {
            type: Number,
            nullable: false,
            // foreign key for product reference
        },
        userId: {
            type: Number,
            nullable: false,
            // foreign key for user reference
        },
        rating: {
            type: Number,
            nullable: false,
            min: 1,
            max: 5,
        },
        feedback: {
            type: String,
            nullable: false,
        },
        createdAt: {
            type: Date,
            default: () => 'CURRENT_TIMESTAMP',
        },
    },
    relations: {
        product: {
            type: "many-to-one",
            target: "Product", // Product entity
            joinColumn: {
                name: "productId",
                referencedColumnName: "id",
            }, // Product foreign key
        },
        user: {
            type: "many-to-one",
            target: "User", // User entity
            joinColumn: {
                name: "userId",
                referencedColumnName: "id",
            }, // User foreign key
        },
    },
});

export default ProductReview;
