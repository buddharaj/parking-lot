const { v4: uuidv4 } = require('uuid');
class Ticket {
    constructor(parkingSpot, vehicle, entryDateTime, parkingLotType) {
        this.ticketNumber = uuidv4(); // generate unique id ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        this.parkingSpot = parkingSpot;
        this.vehicle = vehicle;
        this.entryDateTime = entryDateTime;
        this.parkingLotType = parkingLotType;
    }
};

module.exports = Ticket;
