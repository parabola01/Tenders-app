const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Tender = require('./tender');

const Offer = sequelize.define('offer', {
    bidderName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bidValue: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    bidDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Offer;
