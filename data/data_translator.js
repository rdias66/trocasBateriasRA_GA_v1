//npm install xlsx
//npm i --save https://cdn.sheetjs.com/xlsx-0.19.2/xlsx-0.19.2.tgz
import returnInvalidDates from 'src/data_handler.js';
const XLSX = require("xlsx");
const invalidDates = returnInvalidDates();

const workbook = XLSX.readFile("./data/Trocas_Bateria_RAs_GAs.xlsx");

const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const XSLjsonArray = [];

XSLjsonArray =  XLSX.utils.sheet_to_json(worksheet, opts);

const jsonExample = { //todos setados para string inicialmente mas sua versão final está explicita dentro do valor
  sequencial: 'Number', 
  numero_equipamento: 'string',
  sigla_SE: 'string',
  tipo_equip: 'string',
  operacional: 'string',
  data_ultima_troca: 'Date',
  data_proxima_troca: 'Date'
}


