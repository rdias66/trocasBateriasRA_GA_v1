import arrayWithSettedDates from './service/data_handler.js';//working

import {dueNextArray, changeExpiredArray} from './service/functions.js'; //working

import XLSXjsonArray from './data/data_translator.js'; //working

//import send equips

const handledDataJsonArray = arrayWithSettedDates(XLSXjsonArray);

const equipsDueNext = dueNextArray(handledDataJsonArray);

const equipsExpired = changeExpiredArray(handledDataJsonArray);


//sendEquips(equipsChangeDueNext);
//text not formated on email, only sendind jsons

