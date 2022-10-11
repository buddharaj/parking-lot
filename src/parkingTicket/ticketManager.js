const Ticket = require('./ticket');
class TicketManager {
    constructor() {
        this.ticketList = [];
    }

    /**
    * @description - a public method to be called by parking lot manager/attendant to generate a new ticket
    * @param {object} parkingSpot - parking spot
    * @param {object} ticketNumber - ticket number
    * @param {string} entryDateTime - entry time
    * @param {string} parkingLotType - parking lot type - to be used while calculating fees
    * @returns {object} - a ticket object which has required details given to vehicle owner
    */
    generateTicket(parkingSpot, vehicle, entryDateTime, parkingLotType) {
        const ticket = new Ticket(parkingSpot, vehicle, entryDateTime, parkingLotType);
        this.ticketList.push(ticket);
        return {
            ticketNumber: ticket.ticketNumber,
            spotNumber: ticket.parkingSpot.spotNumber,
            entryDateTime: ticket.entryDateTime,
        };
    }

    /**
    * @description - a public method to be used to retrive ticket info
    * @param {string} ticketNumber - ticket number
    * @returns {object} - ticket details
    */
    getTicket(ticketNumber) {
        return this.ticketList.find((ticket) => ticket.ticketNumber === ticketNumber);
    }
};

module.exports = TicketManager;