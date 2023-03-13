import arrayWithSettedDates from './service/data_handler.js';///working
import {dueNextArray, changeExpiredArray} from './service/functions.js'; //working
import {XLSXjsonArray, invalidDatesArray} from './data/data_translator.js'; //working
import sendEquips from './service/email_sender.js';


const handledDataJsonArray = arrayWithSettedDates(XLSXjsonArray);

const equipsDueNext = dueNextArray(handledDataJsonArray);

const equipsExpired = changeExpiredArray(handledDataJsonArray);

console.log(handledDataJsonArray.length);

console.log(equipsDueNext.length);

console.log(equipsExpired.length);

console.log(invalidDatesArray.length);

const sender = sendEquips(equipsDueNext);

//text not formated on email, only sendind jsons

