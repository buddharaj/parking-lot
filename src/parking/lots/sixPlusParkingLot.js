const ParkingLotAbstract = require('./parkingLotAbstract');
const constants = require('../../config/constants')
const SixPlusParkingSpot = require('../spots/sixPlusParkingSpot');

class SixWheelerParkingLot extends ParkingLotAbstract {
    constructor() {
        super(constants.parkingSpotType.SIXPLUSWHEELER);
    }

    /**
    * @description - a public method which add parking spots for given capacity to 6 plus wheeler parking lot
    * @param {string} capacity - a number of spots has to be added
    */
    addParkingLot(capacity) {
        this.capacity = capacity;
        for (let i = 0; i < capacity; i++) {
            this.parkingLots.push(new SixPlusParkingSpot(i)); 
        }
    }
     // to do implement pricing
};
module.exports = SixWheelerParkingLot;
