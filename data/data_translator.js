import XLSX from 'xlsx';
import fs from 'fs';

const workbook = XLSX.readFile("data/test_sheet.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const dataArray = XLSX.utils.sheet_to_json(worksheet);
const invalidDatesArray = [];
const savePath = './generatedSheets/'; // file path to be created on data section

const XLSXjsonArray = dataArray.filter(equipJson => { //rebuilds the array, transforming the string dates into Date types, pushing invalid data into invalid dates array.
         if(equipJson.data_ultima_troca != ' '){
         equipJson.data_ultima_troca = new Date(fixDateFormat(equipJson.data_ultima_troca)); //function built for an especific sheet
         return equipJson;
         }
         invalidDatesArray.push(equipJson);
  });

  function fixDateFormat(dateString){
        dateString = dateString.trim();
        let  localStringArraySeparation = dateString.split("/");
        return localStringArraySeparation[1] + "-" + localStringArraySeparation[0] + "-" + localStringArraySeparation[2];
}

export {XLSXjsonArray , invalidDatesArray};
