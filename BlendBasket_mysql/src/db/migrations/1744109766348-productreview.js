export default class Productreview1744109766348 {
    name = 'Productreview1744109766348'

    async up(queryRunner) {
        // await queryRunner.query(`CREATE TABLE \`permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`route\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, UNIQUE INDEX \`IDX_48ce552495d14eae9b187bb671\` (\`name\`), UNIQUE INDEX \`IDX_b91045efa9a856403355b9634e\` (\`route\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`price\` decimal NOT NULL, \`unit\` varchar(255) NOT NULL, \`barcode\` varchar(255) NOT NULL, \`stock\` int NOT NULL, \`imageURL\` varchar(255) NOT NULL, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`categoryId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`product_categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, UNIQUE INDEX \`IDX_a75bfadcd8291a0538ab7abfdc\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_reviews\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productId\` int NOT NULL, \`userId\` int NOT NULL, \`rating\` int NOT NULL, \`feedback\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`weight\` int NULL, UNIQUE INDEX \`IDX_f6d54f95c31b73fb1bdd8e91d0\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`role_permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`roleId\` int NOT NULL, \`permissionId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`tokens\` (\`id\` int NOT NULL AUTO_INCREMENT, \`token\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`expires\` timestamp NOT NULL, \`blacklisted\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` int NOT NULL, \`email_verified\` int NOT NULL, \`address\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\` FOREIGN KEY (\`categoryId\`) REFERENCES \`product_categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
         await queryRunner.query(`ALTER TABLE \`product_reviews\` ADD CONSTRAINT \`FK_32edd80d91dff1bc19e79c8f16d\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
         await queryRunner.query(`ALTER TABLE \`product_reviews\` ADD CONSTRAINT \`FK_964f13abf796aca25d7e5849c64\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE \`role_permissions\` ADD CONSTRAINT \`FK_b4599f8b8f548d35850afa2d12c\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE \`role_permissions\` ADD CONSTRAINT \`FK_06792d0c62ce6b0203c03643cdd\` FOREIGN KEY (\`permissionId\`) REFERENCES \`permissions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`role_permissions\` DROP FOREIGN KEY \`FK_06792d0c62ce6b0203c03643cdd\``);
        await queryRunner.query(`ALTER TABLE \`role_permissions\` DROP FOREIGN KEY \`FK_b4599f8b8f548d35850afa2d12c\``);
        await queryRunner.query(`ALTER TABLE \`product_reviews\` DROP FOREIGN KEY \`FK_964f13abf796aca25d7e5849c64\``);
        await queryRunner.query(`ALTER TABLE \`product_reviews\` DROP FOREIGN KEY \`FK_32edd80d91dff1bc19e79c8f16d\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`tokens\``);
        await queryRunner.query(`DROP TABLE \`role_permissions\``);
        await queryRunner.query(`DROP INDEX \`IDX_f6d54f95c31b73fb1bdd8e91d0\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`product_reviews\``);
        await queryRunner.query(`DROP INDEX \`IDX_a75bfadcd8291a0538ab7abfdc\` ON \`product_categories\``);
        await queryRunner.query(`DROP TABLE \`product_categories\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP INDEX \`IDX_b91045efa9a856403355b9634e\` ON \`permissions\``);
        await queryRunner.query(`DROP INDEX \`IDX_48ce552495d14eae9b187bb671\` ON \`permissions\``);
        await queryRunner.query(`DROP TABLE \`permissions\``);
    }
}
