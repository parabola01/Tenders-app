const offerService = require('../services/offerService');
const tenderService = require('../services/tenderService');

exports.addOffer = (req, res) => {
    const tenderId = req.params.tenderId;
    const { bidderName, bidValue } = req.body;
    offerService.addOffer({ bidderName, bidValue, tenderId })
        .then(offer => {
            return tenderService.getTenderDetails(tenderId)
                .then(tender => {
                    res.render('offerConfirmation', {
                        tender,
                        offer
                    });
                });
        })
        .catch(err => console.log(err));
};
