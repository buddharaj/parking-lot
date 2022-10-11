const ParkingLotFactory = require('./parkingLotFactory');
const TicketManager = require('../parkingTicket/ticketManager');
const ReceiptManager = require('../parkingReceipt/receiptManager');
const ticketManager = new TicketManager();
const receiptManager = new ReceiptManager();

class ParkingLotManager {
    constructor(parkinglotType) {
        this.parkinglotType = parkinglotType;
        this.parkingLot = {};
    }

    /**
    * @description - a public method to add parking spots in the all parking lot space 
    *                based on its vehicle type (2W, 4W etc)
    * @param {string} vehicleType - vehicle type
    * @param {string} capacity - a number of spots has to be added
    */
    addParkingSpot(vehicleType, capacity) {
        this.parkingLot[vehicleType] = ParkingLotFactory.create(vehicleType)
        this.parkingLot[vehicleType].addParkingLot(capacity);
    }

    /**
    * @description - a public method to park a vehicle in respective vehicle type of parkinglot
    * @param {object} vehicle - a vehicle object to be parked
    * @param {string} entryDateTime - entry time while parking
    * @returns {object} - a ticket object which has required details once parked
    */
    park(vehicle, entryDateTime) {
        if (!this.parkingLot[vehicle.vehicleType]) {
            throw new Error(`No parking for vehicle type - ${vehicle.vehicleType}`)
        }
        if (this.parkingLot[vehicle.vehicleType].isFull()) {
            throw new Error('No space available')
        }
        const spot = this.parkingLot[vehicle.vehicleType].park();
        return ticketManager.generateTicket(spot, vehicle, entryDateTime, this.parkinglotType);
    }

    /**
    * @description - a public method to unpark a vehicle from respective vehicle type of parkinglot
    * @param {object} ticketNumber - a ticket number to be present before exit
    * @param {string} exitDateTime - exit time before leaving
    * @returns {object} - a receipt object which has required details before exit (such as cost, duration)
    */
    unpark(ticketNumber, exitDateTime) {
        const ticket = ticketManager.getTicket(ticketNumber);
        if (!ticket || !this.parkingLot[ticket.vehicle.vehicleType]) {
            throw new Error(`Invalid request`)
        }
        this.parkingLot[ticket.vehicle.vehicleType].unPark(ticket.parkingSpot.spotNumber);
        return receiptManager.generateReceipt(ticket, exitDateTime);
    }

};
module.exports = ParkingLotManager;