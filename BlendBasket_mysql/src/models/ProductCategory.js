import { EntitySchema } from 'typeorm';

const ProductCategory = new EntitySchema({
    name: "ProductCategory",
    tableName: "product_categories", // Table name in the database
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            unique: true, // Ensuring category name is unique
        },
        description: {
            type: String,
            nullable: true,
        },
    },
    relations: {
        products: {
            type: "one-to-many", // One category can have many products
            target: "Product", // The target is the Product entity
            inverseSide: "category", // The inverse side of the relation in Product
            cascade: true, // Cascade operations (e.g., insert, update, delete) to related products
        },
    },
});

export default ProductCategory;
