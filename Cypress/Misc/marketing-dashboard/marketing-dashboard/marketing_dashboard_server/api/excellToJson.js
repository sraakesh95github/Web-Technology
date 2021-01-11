const path = require('path');
const nodeXj = require("xls-to-json");
const appConfig = require('../configuration');
const inputFileName = appConfig.excell.filename;
const excellSheetname = appConfig.excell.sheetname;
const inputFilePath = appConfig.excell.location;
const outputFileName = appConfig.output.filename;
const outputFilePath = appConfig.output.location;

const completeInputFilePath = `../${inputFilePath}/${inputFileName}`;
const completeOutputFilePath = `../${outputFilePath}/${outputFileName}`;

const parseExcel = () => {

try{ 
    let status = "";
     nodeXj({
      input: path.resolve(__dirname,completeInputFilePath), 
      output: path.resolve(__dirname,completeOutputFilePath), 
      sheet: excellSheetname,
    },(parseErr)=>{
      if(parseErr) {
        console.log('Error');
        return status; 
      } else {
        console.log('Json created successfuly');
      }
    });
  }catch(e){
    return(e);
  }
}

module.exports = parseExcel;