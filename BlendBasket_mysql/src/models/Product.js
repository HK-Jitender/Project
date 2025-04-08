import { EntitySchema } from 'typeorm';

const Product = new EntitySchema({
    name: "Product",
    tableName: "products", // Table name in the database
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: "decimal", // You can use "decimal" or "float" depending on your database
            required: true,
        },
        unit: {
            type: String,
            required: true,
        },
        barcode: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        imageURL: {
            type: String,
            required: true,
        },
        createdAt: {
            type: "timestamp", // Change to "timestamp" for MySQL compatibility
            default: () => "CURRENT_TIMESTAMP",
        },
        updatedAt: {
            type: "timestamp", // Change to "timestamp" for MySQL compatibility
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP", // Update the timestamp automatically when the row is updated
        },
        
        categoryId: {
            type: Number, // Assuming categoryId is a number
            nullable: false,
        },
    },
    relations: {
        category: {
            type: "many-to-one", // A product belongs to one category
            target: "ProductCategory", // The target is the ProductCategory entity
            joinColumn: {
                name: "categoryId", // This is the foreign key in the Product table
                referencedColumnName: "id", // The referenced column in the ProductCategory table
            },
        },
    },
});

export default Product;
