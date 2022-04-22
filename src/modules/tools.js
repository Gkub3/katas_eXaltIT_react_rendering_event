export default class Tools{
    /**
     * Conversion d'une chaine heure en minutes
     * 
     * @param {string} str Heure au format HH:nn
     * @returns {number} Minutes
     */
    static convertHourStrToMinutes = (str) => {
        let parts = str.split(':')
        if (parts.length !== 2) {return 0}
        return parseInt(parts[0]) * 60 + parseInt(parts[1])
    }
    /**
     * Conversion de minutes en une chaine heure
     * 
     * @param {number} nbr Minutes
     * @returns {string} Heure au format HH:nn
     */
     static convertMinutesToHourStr = (nbr) => {
        let hour = Math.floor(nbr / 60),
            minute = nbr % 60;
        return [(hour<10?"0":"")+hour, (minute<10?"0":"")+minute].join(':');
    }
}