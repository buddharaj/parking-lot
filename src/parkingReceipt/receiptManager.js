const Receipt = require('./receipt');
const FeeStrategy = require('../feesModel/feeStrategy');
const feeStrategy = new FeeStrategy();
class ReceiptManager {

    /**
    * @description - a public method to be called by parking lot manager/attendant to generate a new receipt
    * @param {object} ticket - ticket info
    * @param {string} exitDateTime - exit date time
    * @returns {object} - a receipt object which has required details given to vehicle owner
    */
    generateReceipt(ticket, exitDateTime) {
        const fees = feeStrategy.calculateFees(ticket, exitDateTime);
        const receipt = new Receipt(ticket.entryDateTime, exitDateTime, fees);
        return {
            receiptNumber: receipt.receiptNumber,
            entryDateTime: receipt.entryDateTime,
            exitDateTime: receipt.exitDateTime,
            fees: receipt.fees,
        }
    }
};

module.exports = ReceiptManager;