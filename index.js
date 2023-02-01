import {returnInvalidDates, arrayWithSettedDates} from './src/data_handler.js';
import {dueNextArray, changeExpiredArray} from './src/functions.js';
import XSLjsonArray from './data/data_translator.js';
import returnInvalidDates from 'src/data_handler.js';

const handledDataJsonArray = arrayWithSettedDates(XSLjsonArray);

const invalidDates = returnInvalidDates();

const equipsChangeDueNext = dueNextArray(handledDataJsonArray);

const equipsChangeExpired = changeExpiredArray(handledDataJsonArray);

//test + debug
//set up automated mail
//send arrays 


