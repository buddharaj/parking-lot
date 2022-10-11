const ParkingLotAbstract = require('./parkingLotAbstract');
const constants = require('../../config/constants')
const FourWheelerParkingSpot = require('../spots/fourWheelerParkingSpot');

class FourWheelerParkingLot extends ParkingLotAbstract {
    constructor() {
        super(constants.parkingSpotType.FOURWHEELER);
    }

    /**
    * @description - a public method which add parking spots for given capacity to four wheeler parking lot
    * @param {string} capacity - a number of spots has to be added
    */
    addParkingLot(capacity) {
        this.capacity = capacity;
        for (let i = 0; i < capacity; i++) {
            this.parkingLots.push(new FourWheelerParkingSpot(i)); 
        }
    }
};
module.exports = FourWheelerParkingLot;
