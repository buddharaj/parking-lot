
module.exports = {
    ONE_DAYS_MINUTES: 1 * 60 * 24,

    /**
    * @description - a helper function which calculates total minutes difference from given start and end time
    * @param {string} startTime - start time
    * @param {string} endTime - end time
    * @returns {number} - minutes 
    */
    getDuration(startTime, endTime) {
        const msec = new Date(endTime) - new Date(startTime);
        return Math.floor(msec / 1000 / 60);
    },

    /**
    * @description - a helper function which calculates total hours and add floor values if any remaining minutes
    * @param {string} minutes - minutes
    * @returns {number} - hours considering floor value 
    */
    perHourCalculation(minutes) {
        return (Math.floor(minutes / 60) + ((minutes % 60) !== 0 ? 1: 0));
    },

   /**
    * @description - a helper function which calculates total days and add floor values if any remaining minutes
    * @param {string} minutes - minutes
    * @returns {number} - days considering floor value 
    */
    perDayCalculation(minutes) {
        return  (Math.floor(minutes / this.ONE_DAYS_MINUTES) + ((minutes % this.ONE_DAYS_MINUTES) !== 0 ? 1 : 0));
    }
};
