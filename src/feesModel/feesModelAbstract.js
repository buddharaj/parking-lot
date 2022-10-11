const priceList = require('../../pricelist.json');
class FeesModelAbstract {
    
    /**
    * @description - a protected method to retrive price list for given fees model based on vehcile type
    * @param {string} parkingLotType - fees model type
    * @param {string} vehicleType - vehicle type (such as 2W, 4W)
    * @returns {array/number} - price details
    */
    __getPriceInfo(parkingLotType, vehicleType) {
        return priceList[parkingLotType][vehicleType];
    }

    /**
    * @description - an abstract method has to implement by its child to calcute fees
    * @param {object} ticket - ticket details
    * @param {string} exitDateTime - exit datetime
    * @returns {array/number} - price details
    */
    calculateFees(ticket, exitDateTime) {
        throw new Error('Method "calculateFees()" must be implemented.')
    }
};

module.exports = FeesModelAbstract;