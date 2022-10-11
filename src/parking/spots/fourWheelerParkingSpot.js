const ParkingSpot = require('./parkingSpot');
class FourWheelerParkingSpot extends ParkingSpot {
    constructor(spotNumber) {
        super(spotNumber);
    }
};

module.exports = FourWheelerParkingSpot;
