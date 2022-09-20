import { Sequelize } from "sequelize";
 
const db = new Sequelize('test', 'root', 'Ittech1@#$', {
    host: "localhost",
    port: '3306',
    dialect: "mysql"
});
 
export default db;