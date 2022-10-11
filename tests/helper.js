module.exports = {
    
    /**
    * @description - a test helper function to get a future date by adding days, hours or minutes
    * @param {string} initialDate - input date
    * @param {number} addDays - number days
    * @param {number} addHours - number hours
    * @param {number} addMinutes - number minutes
    * @returns {string} - a new date
    */
    addDate(initialDate, addDays = 0, addHours = 0, addMinutes = 0) {
        let date = new Date(initialDate);
            date.setTime(
                    date.getTime()
                    + (addDays * 24 * 60 * 60 * 1000) // add days
                    + (addHours * 60 * 60 * 1000) // add hours
                    + (addMinutes * 60 * 1000) // add minutes
                    );
        return date;
    }
};