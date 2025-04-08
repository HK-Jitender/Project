// export default  class Roleandpermission1744024604079 {
//     name = 'Roleandpermission1744024604079'

//     async up(queryRunner) {
//         // Create `role_permissions` junction table
//         await queryRunner.query(`
//             CREATE TABLE \`role_permissions\` (
//                 \`id\` int NOT NULL AUTO_INCREMENT, 
//                 \`roleId\` int NOT NULL, 
//                 \`permissionId\` int NOT NULL, 
//                 PRIMARY KEY (\`id\`)
//             ) ENGINE=InnoDB
//         `);

//         // Add foreign key constraint between `role_permissions.roleId` and `roles.id`
//         await queryRunner.query(`
//             ALTER TABLE \`role_permissions\` 
//             ADD CONSTRAINT \`FK_role_permission_role\` 
//             FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) 
//             ON DELETE CASCADE ON UPDATE CASCADE
//         `);

//         // Add foreign key constraint between `role_permissions.permissionId` and `permissions.id`
//         await queryRunner.query(`
//             ALTER TABLE \`role_permissions\` 
//             ADD CONSTRAINT \`FK_role_permission_permission\` 
//             FOREIGN KEY (\`permissionId\`) REFERENCES \`permissions\`(\`id\`) 
//             ON DELETE CASCADE ON UPDATE CASCADE
//         `);
//     }

//     async down(queryRunner) {
//         // Drop the foreign key constraints
//         await queryRunner.query(`
//             ALTER TABLE \`role_permissions\` DROP FOREIGN KEY \`FK_role_permission_permission\`
//         `);
//         await queryRunner.query(`
//             ALTER TABLE \`role_permissions\` DROP FOREIGN KEY \`FK_role_permission_role\`
//         `);

//         // Drop the `role_permissions` table
//         await queryRunner.query(`DROP TABLE \`role_permissions\``);
//     }

// }
