const tenderService = require('../services/tenderService');

exports.getAllTenders = (req, res) => {
    tenderService.getAllTenders()
        .then(tenders => {
            res.render('tenders', { tenders });
        })
        .catch(err => console.log(err));
};

exports.getTenderDetails = (req, res) => {
    const tenderId = req.params.id;
    tenderService.getTenderDetails(tenderId)
        .then(tender => {
            const sortedOffers = tender.offers.sort((a, b) => a.bidValue - b.bidValue);
            const allOffersExceedBudget = tender.offers.every(offer => offer.bidValue > tender.maxBudget);
            res.render('tenderDetails', { tender, sortedOffers, allOffersExceedBudget });
        })
        .catch(err => console.log(err));
};

exports.addTender = (req, res) => {
    const { title, description, institution, startDate, endDate, maxBudget } = req.body;
    tenderService.addTender({ title, description, institution, startDate, endDate, maxBudget })
        .then(() => res.redirect('/tenders'))
        .catch(err => console.log(err));
};

exports.getClosedTenders = (req, res) => {
    tenderService.getClosedTenders()
        .then(tenders => {
            res.render('closedTenders', { tenders });
        })
        .catch(err => console.log(err));
};
