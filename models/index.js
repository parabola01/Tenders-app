const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Tender = require('./tender');
const Offer = require('./offer');

Tender.hasMany(Offer, { foreignKey: 'tenderId' });
Offer.belongsTo(Tender, { foreignKey: 'tenderId' });

module.exports = {
    sequelize,
    Tender,
    Offer
};
