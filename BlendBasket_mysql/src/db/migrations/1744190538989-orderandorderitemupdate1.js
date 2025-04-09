export default class OrderandOrderItemCreateUpdate11744190538989 {
    name = 'OrderandOrderItemCreateUpdate11744190538989'
  
    async up(queryRunner) {
      // Create `orders` table (if not already created)
      await queryRunner.query(`
        CREATE TABLE \`orders\` (
          \`id\` int NOT NULL AUTO_INCREMENT,
          \`customerId\` int NOT NULL,
          \`total\` decimal NOT NULL,
          \`status\` varchar(255) NOT NULL,
          \`delivery\` varchar(255) NOT NULL,
          \`paymentMethod\` varchar(255) NOT NULL,
          \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
          \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (\`id\`)
        ) ENGINE=InnoDB;
      `);
  
      // Create `order_items` table with `orderId` as a foreign key to `orders`
      await queryRunner.query(`
        CREATE TABLE \`order_items\` (
          \`id\` int NOT NULL AUTO_INCREMENT,
          \`productId\` int NOT NULL,
          \`quantity\` int NOT NULL,
          \`price\` decimal NOT NULL,
          \`orderId\` int NOT NULL,
          PRIMARY KEY (\`id\`),
          CONSTRAINT \`FK_order_items_orderId\`
            FOREIGN KEY (\`orderId\`)
            REFERENCES \`orders\`(\`id\`)
            ON DELETE CASCADE
            ON UPDATE CASCADE
        ) ENGINE=InnoDB;
      `);
  
      // Create `order_summaries` table with `orderId` as a foreign key to `orders`
      await queryRunner.query(`
        CREATE TABLE \`order_summaries\` (
          \`id\` int NOT NULL AUTO_INCREMENT,
          \`subtotal\` decimal NOT NULL,
          \`serviceFee\` decimal NOT NULL,
          \`overWeightFee\` decimal NOT NULL,
          \`orderId\` int NOT NULL,
          PRIMARY KEY (\`id\`),
          CONSTRAINT \`FK_order_summaries_orderId\`
            FOREIGN KEY (\`orderId\`)
            REFERENCES \`orders\`(\`id\`)
            ON DELETE CASCADE
            ON UPDATE CASCADE
        ) ENGINE=InnoDB;
      `);
    }
  
    async down(queryRunner) {
      // Drop foreign key constraint for `orderId` in `order_items` table
      await queryRunner.query(`
        ALTER TABLE \`order_items\`
        DROP FOREIGN KEY \`FK_order_items_orderId\`
      `);
  
      // Drop foreign key constraint for `orderId` in `order_summaries` table
      await queryRunner.query(`
        ALTER TABLE \`order_summaries\`
        DROP FOREIGN KEY \`FK_order_summaries_orderId\`
      `);
  
      // Drop `order_items` table
      await queryRunner.query(`
        DROP TABLE \`order_items\`
      `);
  
      // Drop `order_summaries` table
      await queryRunner.query(`
        DROP TABLE \`order_summaries\`
      `);
  
      // Drop `orders` table
      await queryRunner.query(`
        DROP TABLE \`orders\`
      `);
    }
  };
  