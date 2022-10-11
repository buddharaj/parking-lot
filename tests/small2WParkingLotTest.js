const constants = require('../src/config/constants');
const helper = require('./helper');
const ParkingLotManager = require('../src/parking/parkingLotManager');
const Vehicle = require('../src/vehicles/vehicle');
const { expect } = require('chai');
const parkingLotManager = new ParkingLotManager(constants.parkingLotType.SMALL);
const entyDateTime = new Date();
let exitDateTime = helper.addDate(entyDateTime, 0, 0, 30); // exit time after 0 days, 0 hours, 30 minutes

describe('Test for Small motorcycle/scooter parking lot', () => { 
    let parkingTicket1;
    let parkingTicket2;
    let parkingTicket3;
    before('should able to add 2 spot for small 2 wheeler parkinglot', () => {
        expect(parkingLotManager.addParkingSpot(constants.vehicleType.MOTORCYCLE, 2)).not.to.throw;
    });

    it('action - Park motorcycle - 1', () => {
        parkingTicket1 = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        expect(parkingTicket1).to.have.property('ticketNumber');
        expect(parkingTicket1).to.have.property('spotNumber');
    });
    it('action - Park scooter ', () => {
        parkingTicket2 = parkingLotManager.park(new Vehicle(constants.vehicleType.SCOOTER), entyDateTime);
        expect(parkingTicket2).to.have.property('ticketNumber');
        expect(parkingTicket2).to.have.property('spotNumber');
    });
    it('action - Park scooter - negative case - No space available ', () => {
        expect(async () => await parkingLotManager.park(new Vehicle(constants.vehicleType.SCOOTER), entyDateTime)).to.throws;
    });
    it('action - Unpark scooter using ticket number', () => {
        const parkingReceipt = parkingLotManager.unpark(parkingTicket2.ticketNumber, exitDateTime);
        expect(parkingReceipt).to.have.property('fees').to.be.equals(10);
    });
    it('action - Park another motorcycle', () => {
        parkingTicket3 = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        expect(parkingTicket3).to.have.property('ticketNumber');
        expect(parkingTicket3).to.have.property('spotNumber');
    });
    it('action - Unpark first motorcycle ticket number', () => {
        exitDateTime = helper.addDate(entyDateTime, 0, 3, 30); // unpark after 0 days, 3 hours, 30 minutes
        const parkingReceipt = parkingLotManager.unpark(parkingTicket1.ticketNumber, exitDateTime);
        expect(parkingReceipt).to.have.property('fees').to.be.equals(40);

    });
} );