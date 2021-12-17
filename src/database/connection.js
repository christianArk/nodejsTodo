import { Sequelize } from 'sequelize'
require('dotenv').config();

const {DB_NAME, DB_USER, DB_PASSWORD} = process.env

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

export const initDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

sequelize.sync()