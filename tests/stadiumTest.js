const constants = require('../src/config/constants');
const helper = require('./helper');
const ParkingLotManager = require('../src/parking/parkingLotManager');
const Vehicle = require('../src/vehicles/vehicle');
const { expect } = require('chai');
const parkingLotManager = new ParkingLotManager(constants.parkingLotType.STADIUM);
const entyDateTime = new Date();

describe('Test for Stadium Parking Lot ', () => {
    before(() => {
        parkingLotManager.addParkingSpot(constants.vehicleType.MOTORCYCLE, 100);
        parkingLotManager.addParkingSpot(constants.vehicleType.CAR, 80);
    });
    
    it('Motorcycle parked for 3 hours and 40 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 3, 40));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(30);        
    });
    it('Motorcycle parked for 14 hours and 59 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.MOTORCYCLE), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 14, 59));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(390);        
    });
    it('Electric SUV parked for 11 hours and 30 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.SUV), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 11, 30));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(180);        
    });
    it('SUV parked for 13 hours and 5 mins', () => {
        const parkingTicket = parkingLotManager.park(new Vehicle(constants.vehicleType.SUV), entyDateTime);
        const parkingReceipt = parkingLotManager.unpark(parkingTicket.ticketNumber, helper.addDate(entyDateTime, 0, 13, 5));
        expect(parkingReceipt).to.have.property('fees').to.be.equals(580);        
    });
} );