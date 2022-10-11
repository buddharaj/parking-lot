const constants = require('../config/constants');
const MallFeesModel = require('./mallFeesModel');
const StadiumFeesModel = require('./stadiumFeesModel');
const AirportFeesModel = require('./airportFeesModel');

class FeesFactory {
        
    /**
    * @description - a factory method to create different fees model object
    * @param {string} parkingLotType - fees model type
    * @returns {object} - fees model object
    */
    static create(parkingLotType) {
        switch(parkingLotType) {
            case constants.parkingLotType.MALL:
                return new MallFeesModel();
            case constants.parkingLotType.STADIUM:
                return new StadiumFeesModel();
            case constants.parkingLotType.AIRPORT:
                return new AirportFeesModel();
            default:
                throw new Error('No such parking lot fees type model available');
        }
    }

};

module.exports = FeesFactory;