const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Tender = sequelize.define('tender', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    institution: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    maxBudget: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = Tender;
