const constants = require('../src/config/constants');
const helper = require('./helper');
const ParkingLotManager = require('../src/parking/parkingLotManager');
const Vehicle = require('../src/vehicles/vehicle');
const { expect } = require('chai');
const parkingLotManager = new ParkingLotManager(constants.parkingLotType.AIRPORT);
const entyDateTime = new Date();

describe('Test for Airport Parking Lot ', () => {
    before(() => {
        parkingLotManager.addParkingSpot(constants.vehicleType.MOTORCYCLE, 200);
        parkingLotManager.addParkingSpot(constants.vehicleType.CAR, 500);
    });
    
    it('Motorcycle parked for 55 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 0, 55));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(0);        
    });
    it('Motorcycle parked for 14 hours and 59 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 14, 59));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(60);        
    });
    it('Motorcycle parked for 1 day and 12 hours', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 1, 12, 0));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(160);        
    });
    it('Car parked for 50 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.CAR), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 0, 50));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(60);        
    });
    it('SUV parked for 23 hours and 59 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.SUV), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 23, 59));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(80);        
    });
    it('Car parked for 3 days and 1 hour', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.CAR), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 3, 1, 00));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(400);        
    });
} );