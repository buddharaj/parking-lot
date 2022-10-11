const FeesModelAbstract = require('./feesModelAbstract');
const constants = require('../config/constants');
const helper = require('../utils/helper');
class AirportFeesModel extends FeesModelAbstract {

    /**
    * @description - a method which calculates fees for Airport Fees Model
    * @param {object} ticket - ticket number
    * @param {string} exitDateTime - exit date time
    * @returns {number} - fees
    */
    calculateFees(ticket, exitDateTime) {
        const priceInfo = this.__getPriceInfo(constants.parkingLotType.AIRPORT, ticket.vehicle.vehicleType);
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
            // if minutes in between start and end interval, then thats the only fees
            if (interval.type === constants.feesModelType.INTERVAL
                && (interval.start * 60) < minutes && minutes <= (interval.end * 60)
                ) {
                fees = interval.fees;
                break;
            }

            // if minutes more than a day, then calcuate on daily basis rate
            if (minutes > helper.ONE_DAYS_MINUTES && interval.type === constants.feesModelType.PER_DAY) {
                fees = interval.fees * helper.perDayCalculation(minutes);
                break;
            }
        };
        return fees;
    }

};

module.exports = AirportFeesModel;