import arrayWithSettedDates from './service/data_handler.js';///working
import {dueNextArray, changeExpiredArray} from './service/functions.js'; //working
import {XLSXjsonArray, invalidDatesArray} from './data/data_translator.js'; //working



const handledDataJsonArray = arrayWithSettedDates(XLSXjsonArray);

const equipsDueNext = dueNextArray(handledDataJsonArray);

const equipsExpired = changeExpiredArray(handledDataJsonArray);

console.log(handledDataJsonArray);

console.log(equipsDueNext);

console.log(equipsExpired);

console.log(invalidDatesArray);

//const sender = sendEquips(equipsChangeDueNext);

//text not formated on email, only sendind jsons

