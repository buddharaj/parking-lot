const FeesModelAbstract = require('./feesModelAbstract');
const helper = require('../utils/helper');
const constants = require('../config/constants');
class StadiumFeesModel extends FeesModelAbstract {
    
    /**
    * @description - a method which calculates fees for Stadium Fees Model
    * @param {object} ticket - ticket number
    * @param {string} exitDateTime - exit date time
    * @returns {number} - fees
    */
    calculateFees(ticket, exitDateTime) {
        const priceInfo = this.__getPriceInfo(constants.parkingLotType.STADIUM, ticket.vehicle.vehicleType);
        if (!priceInfo || !priceInfo.length) {
            throw new Error('Fees Model is not found');
        }
        const minutes = helper.getDuration(ticket.entryDateTime, exitDateTime);
        if (minutes < 0) {
            throw new Error('Wrong exit date time. Try again');
        }
        return this.#__calculateFees(priceInfo, minutes);
    }

    /**
    * @description - a private method which calculates fees for given price list
    * @param {array} priceInfo - price list
    * @param {string} minutes - minutes
    * @returns {number} - fees
    */
    #__calculateFees(priceInfo, minutes) {
        let fees = 0;
        for (let interval of priceInfo) {
            if (minutes <= 0) break;
            // handle last entry for per hour rate basis on remaining time
            if (interval.type === constants.feesModelType.PER_HOUR) {
                fees += interval.fees * helper.perHourCalculation(minutes);
                break;
            }
            // add each fees and update remaining minutes to be process next
            if (interval.type === constants.feesModelType.INTERVAL
                && (interval.end - interval.start ) > 0
                ) {
                fees += interval.fees;
                minutes -= (interval.end - interval.start ) * 60;
            }
        };
        return fees;
    }

};

module.exports = StadiumFeesModel;