//npm install xlsx
//npm i --save https://cdn.sheetjs.com/xlsx-0.19.2/xlsx-0.19.2.tgz
import XLSX from 'xlsx';
const workbook = XLSX.readFile("data/test_sheet.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const XLSXjsonArray = XLSX.utils.sheet_to_json(worksheet);
export default XLSXjsonArray;
