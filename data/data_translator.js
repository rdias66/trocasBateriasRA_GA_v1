import XLSX from 'xlsx';
import fs from 'fs';

const workbook = XLSX.readFile("data/test_sheet.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const dataArray = XLSX.utils.sheet_to_json(worksheet);
const invalidDatesArray = [];
const savePath = './generatedSheets/'; // file path to be created on data section

const XLSXjsonArray = dataArray.filter(equipJson => { //rebuilds the array, transforming the string dates into Date types, pushing invalid data into invalid dates array.
         if(isEmpty(equipJson.data_ultima_troca)){
         equipJson.data_ultima_troca = new Date(equipJson.data_ultima_troca.replaceAll("/","-")); //function built for an especific sheet
         return equipJson;
         }
         invalidDatesArray.push(equipJson);
  });

const isEmpty = key => {
         return isEmpty = key !== null ? true : false;
}

const createNewSheet = (jsonArray) => {
          return worksheet = xlsx.utils.json_to_sheet(jsonArray);
}

const newXLSXfile = (worksheetArray, sheetNames) => { //must put all json arrays into one array, and create a string array with the respective names for the each sheet
         const workbook = xlsx.utils.book_new();
         for(let i = 0; i<worksheetArray.length; i++){ //append each sheet(json array transformed in index) onto new xlsx file
                 xlsx.utils.book_append_sheet(workbook, worksheetArray[i], sheetNames[i]);       
         }
         
         const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
  
         fs.writeFileSync(savePath + sheetName, buffer); //
}

export {XLSXjsonArray , invalidDatesArray, newXLSXfile, createNewSheet };
