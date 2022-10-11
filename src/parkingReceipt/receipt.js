const { v4: uuidv4 } = require('uuid');
class Receipt {
    constructor(entryDateTime, exitDateTime, fees) {
        this.receiptNumber = uuidv4(); // generate unique id ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        this.entryDateTime = entryDateTime;
        this.exitDateTime = exitDateTime;
        this.fees = fees;
    }
};

module.exports = Receipt;