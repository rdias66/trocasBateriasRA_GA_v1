import {returnInvalidDates, arrayWithSettedDates} from './service/data_handler.js';
import {dueNextArray, changeExpiredArray} from './service/functions.js';
import XLSXjsonArray from './data/data_translator.js'; //working
//import sendEquips from 'src/email_sender.js';


const handledDataJsonArray = arrayWithSettedDates(XLSXjsonArray);

const invalidDates = returnInvalidDates();

const equipsChangeDueNext = dueNextArray(handledDataJsonArray);

const equipsChangeExpired = changeExpiredArray(handledDataJsonArray);
console.log(handledDataJsonArray)
//sendEquips(equipsChangeDueNext);


//text not formated on email, only sendind jsons

