import arrayWithSettedDates from './service/data_handler.js';///working
import {dueNextArray, changeExpiredArray, updatedArray} from './service/functions.js'; //working
import {XLSXjsonArray, invalidDatesArray, newXLSXfile} from './data/data_translator.js'; //working
import {sendEquips, formatText} from './service/email_sender.js'; //sender working, formatter not tested


const handledDataJsonArray = arrayWithSettedDates(XLSXjsonArray);

const equipsDueNext = dueNextArray(handledDataJsonArray);

const equipsExpired = changeExpiredArray(handledDataJsonArray);

const createUpdatedXLSXfile = newXLSXfile(updatedArray, 'updated_db_sheet');

const createSentEquipsXLSXfile = newXLSXfile(equipsDueNext, 'sent_objects_sheet'); 

const sender = sendEquips(formatText(equipsDueNext));



