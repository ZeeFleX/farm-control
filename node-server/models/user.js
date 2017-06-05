let Sequelize = require('sequelize');
let sequelize = require('../db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

module.exports = User;