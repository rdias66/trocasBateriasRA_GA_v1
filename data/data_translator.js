//npm install xlsx
//npm i --save https://cdn.sheetjs.com/xlsx-0.19.2/xlsx-0.19.2.tgz
import returnInvalidDates from 'src/data_handler.js';

const invalidDates = returnInvalidDates();

const XLSX = require("xlsx");

const invalidDates = returnInvalidDates();

const workbook = XLSX.readFile("./data/Trocas_Bateria_RAs_GAs.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const options = {
  header: 1
};

const XSLjsonArray = XLSX.utils.sheet_to_json(worksheet, options);
