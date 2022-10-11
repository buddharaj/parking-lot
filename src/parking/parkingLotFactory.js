const TwoWParkingLot = require('./lots/twoWheelerParkingLot');
const FourWParkingLot = require('./lots/fourWheelerParkingLot');
const SixPlusWParkingLot = require('./lots/sixPlusParkingLot');
const constants = require('../config/constants');

class ParkingLotFactory {
    static create(vehicleType) {
        switch(vehicleType) {
            case constants.vehicleType.MOTORCYCLE:
            case constants.vehicleType.SCOOTER:
                return new TwoWParkingLot();

            case constants.vehicleType.CAR:
            case constants.vehicleType.SUV:
                return new FourWParkingLot();

            case constants.vehicleType.BUS:
            case constants.vehicleType.TRUCK:
                return new SixPlusWParkingLot();

            default:
                throw new Error('No such parking lot available for given vehcile type');
        }
    }
}

module.exports = ParkingLotFactory;