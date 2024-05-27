const Tender = require('../models/tender');
const Offer = require('../models/offer');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.getAllTenders = () => {
    return Tender.findAll({ where: { endDate: { [Op.gt]: new Date() } } });
};

exports.getTenderDetails = (tenderId) => {
    return Tender.findByPk(tenderId, { include: [Offer] });
};

exports.addTender = (tenderData) => {
    return Tender.create(tenderData);
};

exports.getClosedTenders = () => {
    return Tender.findAll({ where: { endDate: { [Op.lt]: new Date() } } });
};
