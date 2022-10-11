const ParkingSpot = require('./parkingSpot');
class TwoWheelerParkingSpot extends ParkingSpot {
    constructor(spotNumber) {
        super(spotNumber);
    }
};

module.exports = TwoWheelerParkingSpot;