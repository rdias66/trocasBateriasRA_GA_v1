import arrayWithSettedDates from './service/data_handler.js';//needs testing + debugging  logic working
import {dueNextArray, changeExpiredArray} from './service/functions.js'; //needs testing + debugging + logic working
import {XLSXjsonArray, invalidDatesArray, createXLSXfileFrom} from './data/data_translator.js'; //working
import sendEquips from './service/email_sender.js';//needs testing + debugging


const handledDataJsonArray = arrayWithSettedDates(XLSXjsonArray);

const equipsDueNext = dueNextArray(handledDataJsonArray);

const equipsExpired = changeExpiredArray(handledDataJsonArray);

//sendEquips(equipsChangeDueNext);
//text not formated on email, only sendind jsons

