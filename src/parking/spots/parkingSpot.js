class ParkingSpot {
    // this is private class variable to prevent modify by others
    #free;
    constructor(spotNumber) {
        this.spotNumber = spotNumber;
        this.#free = true;
    }

    /**
    * @description - a public method to park a vehicle
    */
    park() {
        this.#free = false;
    }

    /**
    * @description - a public method to unpark a vehicle
    */
    unPark() {
        this.#free = true;
    }

    /**
    * @description - a public method to park a vehicle
    * @returns {boolean} -  true if any spot is available, else false
    */
    isFree() {
        return this.#free;
    }
};

module.exports = ParkingSpot;