export default  class Permission1744020772999 {
    name = 'Permission1744020772999'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`route\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, UNIQUE INDEX \`IDX_48ce552495d14eae9b187bb671\` (\`name\`), UNIQUE INDEX \`IDX_b91045efa9a856403355b9634e\` (\`route\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`weight\` int NULL, UNIQUE INDEX \`IDX_f6d54f95c31b73fb1bdd8e91d0\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`tokens\` (\`id\` int NOT NULL AUTO_INCREMENT, \`token\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`expires\` timestamp NOT NULL, \`blacklisted\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        // await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` int NOT NULL, \`email_verified\` int NOT NULL, \`address\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`tokens\``);
        await queryRunner.query(`DROP INDEX \`IDX_f6d54f95c31b73fb1bdd8e91d0\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_b91045efa9a856403355b9634e\` ON \`permissions\``);
        await queryRunner.query(`DROP INDEX \`IDX_48ce552495d14eae9b187bb671\` ON \`permissions\``);
        await queryRunner.query(`DROP TABLE \`permissions\``);
    }
}
