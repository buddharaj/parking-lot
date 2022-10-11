const Feefactory = require('../feesModel/feefactory');
class FeeStrategy {
    
    /**
    * @description - an strategy public method which calls respective fees model strategy to calculate fees
    * @param {object} ticket - ticket number
    * @param {string} exitDateTime - exit date time
    * @returns {number} - fees
    */
    calculateFees(ticket, exitDateTime) {
       const feesModel = Feefactory.create(ticket.parkingLotType)
        return feesModel.calculateFees(ticket, exitDateTime);
    }
};
module.exports = FeeStrategy;