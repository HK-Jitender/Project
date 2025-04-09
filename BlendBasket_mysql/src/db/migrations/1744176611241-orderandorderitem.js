// export default class Orderandorderitem1744176611241 {
//     name = 'Orderandorderitem1744176611241'

//     async up(queryRunner) {
//         // Create the 'orders' table
//         await queryRunner.query(`
//             CREATE TABLE \`orders\` (
//                 \`id\` int NOT NULL AUTO_INCREMENT,
//                 \`customerId\` int NOT NULL,
//                 \`total\` decimal NOT NULL,
//                 \`status\` ENUM('Order confirmed', 'Picking', 'Checking out', 'Delivered', 'Cancel') NOT NULL,  -- Changed from varchar to ENUM
//                 \`delivery\` varchar(255) NOT NULL,
//                 \`paymentMethod\` varchar(255) NOT NULL,
//                 \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
//                 \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
//                 PRIMARY KEY (\`id\`)
//             ) ENGINE=InnoDB
//         `);

//         // Create the 'order_items' table
//         await queryRunner.query(`
//             CREATE TABLE \`order_items\` (
//                 \`id\` int NOT NULL AUTO_INCREMENT,
//                 \`productId\` int NOT NULL,
//                 \`quantity\` int NOT NULL,
//                 \`price\` decimal NOT NULL,
//                 \`orderId\` int NULL,
//                 PRIMARY KEY (\`id\`)
//             ) ENGINE=InnoDB
//         `);

//         // Add foreign key constraints for the 'orders' and 'order_items' tables
//         await queryRunner.query(`
//             ALTER TABLE \`orders\`
//             ADD CONSTRAINT \`FK_e5de51ca888d8b1f5ac25799dd1\`
//             FOREIGN KEY (\`customerId\`) REFERENCES \`users\`(\`id\`)
//             ON DELETE NO ACTION ON UPDATE NO ACTION
//         `);

//         await queryRunner.query(`
//             ALTER TABLE \`order_items\`
//             ADD CONSTRAINT \`FK_f1d359a55923bb45b057fbdab0d\`
//             FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`)
//             ON DELETE NO ACTION ON UPDATE NO ACTION
//         `);

//         await queryRunner.query(`
//             ALTER TABLE \`order_items\`
//             ADD CONSTRAINT \`FK_cdb99c05982d5191ac8465ac010\`
//             FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`)
//             ON DELETE NO ACTION ON UPDATE NO ACTION
//         `);
//     }

//     async down(queryRunner) {
//         // Drop foreign key constraints
//         await queryRunner.query(`ALTER TABLE \`order_items\` DROP FOREIGN KEY \`FK_cdb99c05982d5191ac8465ac010\``);
//         await queryRunner.query(`ALTER TABLE \`order_items\` DROP FOREIGN KEY \`FK_f1d359a55923bb45b057fbdab0d\``);
//         await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_e5de51ca888d8b1f5ac25799dd1\``);

//         // Drop 'order_items' and 'orders' tables
//         await queryRunner.query(`DROP TABLE \`order_items\``);
//         await queryRunner.query(`DROP TABLE \`orders\``);
//     }
// }
