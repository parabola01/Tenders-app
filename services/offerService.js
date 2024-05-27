const Offer = require('../models/offer');

exports.addOffer = (offerData) => {
    return Offer.create(offerData);
};
