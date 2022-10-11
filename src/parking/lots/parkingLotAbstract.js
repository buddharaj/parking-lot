class ParkingLotAbstract {
    constructor(parkingType) {
        if (this.constructor == ParkingLotAbstract) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.capacity = 0;
        this.parkingType = parkingType;
        this.parkingLots = [];
    }

    /**
    * @description - a public method to find next free spot
    * @returns {object} - parking spot object
    */
    findAvailableSpot() {
        let availableSpot = null;
        for (let spot of this.parkingLots) {
            if (spot.isFree()) {
                availableSpot = spot;
                break;
            }
        }
        return availableSpot;
    }

    /**
    * @description - a protected method to be called only by child and it returns parking spot for given ticket
    * @param {string} ticketNumber - ticket number
    * @returns {object} - parking spot object
    */
    __getParkingSpot(ticketNumber) {
        return this.parkingLots.filter((spot) =>  spot.ticket.ticketNumber == ticketNumber);
    }

    /**
    * @description - a public method to be implement by child class, it add parking spots for given capacity
    * @param {string} capacity - a number of spots has to be added
    */
    addParkingLot(capacity) {
        throw new Error('Method "addParkingLot()" must be implemented.')
    }

    /**
    * @description - a public method to be implement by child class, it reset parking spots capacity
    */
    removeParkingLot() {
        this.capacity = capacity;
        this.parkingLots = [];
    }

    /**
    * @description - a public method to check if parking lot has any free spot to park or not
    * @returns {boolean} - true if spot is available, else false
    */
    isFull() {
        for (let spot of this.parkingLots) {
            if (spot.isFree()) return false;
        }
        return true;
    }

    /**
    * @description - a public method to park a vehicle
    * @returns {object} - spot object where the vehicle is parked 
    */
    park() {
        const spot = this.findAvailableSpot();
        spot.park();
        return spot;
    }

    /**
    * @description - a public method to un park a vehicle from given spot number
    * @param {spotNumber} - spot number 
    * @returns {boolean} - true if success else error
    */
    unPark(spotNumber) {
        const spot = this.parkingLots[spotNumber];
        if (!spot) {
            throw new Error('Nothing has parked for this spot');
        }
        spot.unPark();
        return true;
    }
};

module.exports = ParkingLotAbstract;