import { Sequelize } from "sequelize";

const db = new Sequelize('db_stella','root','toor',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;