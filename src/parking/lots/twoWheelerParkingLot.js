const ParkingLotAbstract = require('./parkingLotAbstract');
const constants = require('../../config/constants')
const TwoWheelerParkingSpot = require('../spots/twoWheelerParkingSpot');

class TwoWheelerParkingLot extends ParkingLotAbstract {
    constructor() {
        super(constants.parkingSpotType.TWOWHEELER);
    }

    /**
    * @description - a public method which add parking spots for given capacity to two wheeler parking lot
    * @param {string} capacity - a number of spots has to be added
    */
    addParkingLot(capacity) {
        this.capacity = capacity;
        for (let i = 0; i < capacity; i++) {
            this.parkingLots.push(new TwoWheelerParkingSpot(i)); 
        }
    }
};
module.exports = TwoWheelerParkingLot;
