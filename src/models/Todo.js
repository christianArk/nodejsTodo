const { DataTypes } = require('sequelize');
import { sequelize } from '../database/connection';

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

export default Todo