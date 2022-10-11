const constants = require('../src/config/constants');
const helper = require('./helper');
const ParkingLotManager = require('../src/parking/parkingLotManager');
const Vehicle = require('../src/vehicles/vehicle');
const { expect } = require('chai');
const parkingLotManager = new ParkingLotManager(constants.parkingLotType.MALL);
const entyDateTime = new Date();

describe('Test for Mall Parking lot ', () => {
    before(() => {
        parkingLotManager.addParkingSpot(constants.vehicleType.MOTORCYCLE, 100);
        parkingLotManager.addParkingSpot(constants.vehicleType.CAR, 80);
        parkingLotManager.addParkingSpot(constants.vehicleType.TRUCK, 10);
    });
    
    it('Motorcycle parked for 3 hours and 30 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 3, 30));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(40);        
    });
    it('Car parked for 6 hours and 1 min', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.CAR), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 6, 1));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(140);        
    });
    it('Truck parked for 1 hour and 59 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.TRUCK), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 1, 59));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(100); 
    });
} );