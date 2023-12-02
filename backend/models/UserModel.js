import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const User = db.define('users', {
    npp: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async () => {
    await db.sync();
})();
