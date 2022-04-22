import Tools from './tools';

import datas from '../datas/input.json';

export class Event {
    /**
     * Récupération du debut en minute d'un évènement
     * 
     * @param {Object} event Evènement
     * @returns {number} Début en minute
     */
     static getStart = (event) => { 
        return Tools.convertHourStrToMinutes(event.start);  
    }
    /**
     * Récupération de la fin en minute d'un évènement
     * 
     * @param {Object} event Evènement
     * @returns {number} Fin en minute
     */
     static getEnd = (event) => {
        return this.getStart(event) + event.duration;  
    }
    /**
     * Test si 2 évènements se chevauchent
     * 
     * @param {Object} a Evènement 1
     * @param {Object} b Evènement 2
     * @returns {boolean} Résultat du test
     */
     static isOverlapping = (a, b) => {
        return this.getEnd(a) > this.getStart(b) && this.getStart(a) < this.getEnd(b)
    }
}

export default class Events{
    /**
     * Fonction de tri des évènements
     * 
     * @param {Object} a Evènement 1
     * @param {Object} b Evènement 2
     * @returns {boolean} Résultat du test
     */
    static sortChronologically = (a, b) => {
        if (Event.getStart(a) < Event.getStart(b)) return -1;
        if (Event.getStart(a) > Event.getStart(b)) return 1;
        if (Event.getEnd(a) < Event.getEnd(b)) return -1;
        if (Event.getEnd(a) > Event.getEnd(b)) return 1;
        return 0; 
    }
    /**
     * Récupération de la liste des évènements 
     * 
     * @returns {Array} Liste d'évènements
     */
     static get = () => {
        let events = datas.sort(this.sortChronologically);
        //Initialisation des données d'affichage
        for (let i in events) {events[i].position = {col : 0, size : 1}}
        //Calcul de la colonne d'affichage de notre évènement en fonction des chevauchements
        let overlap = true;
        while (overlap) {
            overlap = false;
            for (let i in events) {
                for (let ii = i, l = events.length; ii < l ; ii++) {
                    if (i === ii) {continue}
                    if (Event.isOverlapping(events[i] , events[ii]) && events[i].position.col === events[ii].position.col){
                        events[ii].position.col++;
                        overlap = true;
                    }
                }  
            }
        }
        //Calcul de la largeur d'affichage de notre évènement
        for (let i in events) {
            let maxCol = 0;
            for (let ii in events) {
                if (i === ii) {continue}
                if (Event.isOverlapping(events[i] , events[ii]) && events[i].position.col !== events[ii].position.col){
                    maxCol = Math.max(...[maxCol, events[i].position.col, events[ii].position.col]);
                }
            }  
            events[i].position.size = 1 / (maxCol + 1);
        }
        return events;
    }
}