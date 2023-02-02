import {returnInvalidDates, arrayWithSettedDates} from './src/data_handler.js';
import {dueNextArray, changeExpiredArray} from './src/functions.js';
import XSLjsonArray from './data/data_translator.js';
import returnInvalidDates from 'src/data_handler.js';
import sendEquips from './src/email_sender.js';


const handledDataJsonArray = arrayWithSettedDates(XSLjsonArray);

const invalidDates = returnInvalidDates();

const equipsChangeDueNext = dueNextArray(handledDataJsonArray);

const equipsChangeExpired = changeExpiredArray(handledDataJsonArray);

sendEquips(equipsChangeDueNext);


//text not formated on email, only sendind jsons

