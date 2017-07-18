class Utils {

    static randomIntFromInterval(min, max, exceptions)
    {
        let randomInt = Math.floor(Math.random()*(max-min+1)+min);

        if(exceptions === undefined || !Array.isArray(exceptions)) {
            exceptions = []
        }

        while(exceptions.indexOf(randomInt) !== -1) {
            randomInt = Math.floor(Math.random()*(max-min+1)+min);
        }

        return randomInt;
    }
}

module.exports = Utils;
