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
});

export default ProductCategory;
