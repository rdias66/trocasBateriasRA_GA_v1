import XLSX from 'xlsx';
const workbook = XLSX.readFile("data/test_sheet.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const dataArray = XLSX.utils.sheet_to_json(worksheet);

const XLSXjsonArray = dataArray.map(equipJson => {
         equipJson.data_ultima_troca = new Date(equipJson.data_ultima_troca.replaceAll("/","-"));
         return equipJson;
  });

export default XLSXjsonArray;
