import XLSX from 'xlsx';
import fs from 'fs';

const workbook = XLSX.readFile("data/db_sheets.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const dataArray = XLSX.utils.sheet_to_json(worksheet);
const invalidDatesArray = [];
const savePath = 'data/'; // file path to be created on data section

const XLSXjsonArray = dataArray.filter(equipJson => { //rebuilds the array, transforming the string dates into Date types, pushing invalid data into invalid dates array.  
      if(equipJson.data_ultima_troca !== undefined){
         equipJson.data_ultima_troca = new Date(fixDateFormat(equipJson.data_ultima_troca)); //function built for an especific sheet
         
         return equipJson;
         }
         invalidDatesArray.push(equipJson);
  });

  function fixDateFormat(dateString){
        let  localStringArraySeparation = dateString.split("/");
        return localStringArraySeparation[1] + "-" + localStringArraySeparation[0] + "-" + localStringArraySeparation[2];
}

const newXLSXfile = (jsonArray, sheetName) => { 
         const workbook = XLSX.utils.book_new();
         const worksheet = XLSX.utils.json_to_sheet(jsonArray);
         XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);            
         const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
         fs.writeFileSync(savePath + sheetName, buffer); //
}

export {XLSXjsonArray , invalidDatesArray, newXLSXfile};
