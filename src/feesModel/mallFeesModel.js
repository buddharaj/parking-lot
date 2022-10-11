const FeesModelAbstract = require('./feesModelAbstract');
const helper = require('../utils/helper');
const constants = require('../config/constants');

class MallFeesModel extends FeesModelAbstract {
    
    /**
    * @description - a method which calculates fees for Mall Fees Model
    * @param {object} ticket - ticket number
    * @param {string} exitDateTime - exit date time
    * @returns {number} - fees
    */
    calculateFees(ticket, exitDateTime) {
        const feesPerHour = this.__getPriceInfo(constants.parkingLotType.MALL, ticket.vehicle.vehicleType);
        return feesPerHour * helper.perHourCalculation(helper.getDuration(ticket.entryDateTime, exitDateTime));
    }
};

module.exports = MallFeesModel;