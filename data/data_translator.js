import XLSX from 'xlsx';
const workbook = XLSX.readFile("data/test_sheet.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const dataArray = XLSX.utils.sheet_to_json(worksheet);

const XLSXjsonArray = dataArray.map(equipJson => {
         equipJson.DataUltimaTroca = new Date(equipJson.DataUltimaTroca.replaceAll("/","-"));
         return equipJson;
  });

export default XLSXjsonArray;
