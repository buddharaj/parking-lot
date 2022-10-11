const ParkingSpot = require('./parkingSpot');
class SixPlusWParkingSpot extends ParkingSpot {
    constructor(spotNumber) {
        super(spotNumber);
    }
};

module.exports = SixPlusWParkingSpot;