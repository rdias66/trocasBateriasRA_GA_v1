import XLSX from 'xlsx';
const workbook = XLSX.readFile("data/test_sheet.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const dataArray = XLSX.utils.sheet_to_json(worksheet);
const invalidDatesArray = [];

const XLSXjsonArray = dataArray.filter(equipJson => { //rebuilds the array, transforming the string dates into Date types, pushing invalid data into invalid dates array.
         if(isEmpty(equipJson.data_ultima_troca)){
         equipJson.data_ultima_troca = new Date(equipJson.data_ultima_troca.replaceAll("/","-"));
         return equipJson;
         }
         invalidDatesArray.push(equipJson);
  });

const isEmpty = key => {
         return isEmpty = key !== null ? true : false;
}

const jsonArrayToXLSX = (name, dataArray) => {
  
}

export {XLSXjsonArray , invalidDatesArray};
