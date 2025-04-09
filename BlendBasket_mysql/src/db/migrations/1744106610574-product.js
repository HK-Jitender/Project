// export  default class Product1744106610574 {
//     name = 'Product1744106610574';

//     async up(queryRunner) {
//         // Create the products table
//         await queryRunner.query(`
//             CREATE TABLE \`products\` (
//                 \`id\` int NOT NULL AUTO_INCREMENT,
//                 \`name\` varchar(255) NOT NULL,
//                 \`price\` decimal NOT NULL,
//                 \`unit\` varchar(255) NOT NULL,
//                 \`barcode\` varchar(255) NOT NULL,
//                 \`stock\` int NOT NULL,
//                 \`imageURL\` varchar(255) NOT NULL,
//                 \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
//                 \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//                 \`categoryId\` int NOT NULL,  -- This is the foreign key column
//                 PRIMARY KEY (\`id\`)
//             ) ENGINE=InnoDB;
//         `);

//         // Add the foreign key constraint to reference product_categories
//         await queryRunner.query(`
//             ALTER TABLE \`products\`
//             ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\`
//             FOREIGN KEY (\`categoryId\`)
//             REFERENCES \`product_categories\`(\`id\`)
//             ON DELETE NO ACTION
//             ON UPDATE NO ACTION;
//         `);
//     }

//     async down(queryRunner) {
//         // Drop the foreign key constraint first
//         await queryRunner.query(`
//             ALTER TABLE \`products\`
//             DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\`;
//         `);

//         // Drop the products table
//         await queryRunner.query(`
//             DROP TABLE \`products\`;
//         `);
//     }
// };
