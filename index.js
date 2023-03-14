import arrayWithSettedDates from './service/data_handler.js';///working
import {dueNextArray, changeExpiredArray} from './service/functions.js'; //working
import {XLSXjsonArray, invalidDatesArray} from './data/data_translator.js'; //working
import {sendEquips, formatText} from './service/email_sender.js'; //sender working, formatter not tested


const handledDataJsonArray = arrayWithSettedDates(XLSXjsonArray);

const equipsDueNext = dueNextArray(handledDataJsonArray);

const equipsExpired = changeExpiredArray(handledDataJsonArray);

console.log(handledDataJsonArray.length);

console.log(equipsDueNext.length);

console.log(equipsExpired.length);

console.log(invalidDatesArray.length);

const sender = sendEquips(formatText(equipsDueNext));



