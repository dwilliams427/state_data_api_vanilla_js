import { createReadStream } from 'fs';
import csv from 'csv-parser';

export function parse_csv(){
// let btnGet = document.querySelector('button');
// let myTable = document.querySelector('#table');

//get all abbreviations
let abbrevs = [];
createReadStream('abbreviations.csv')
  .pipe(csv())
  .on('data', (data) => {
    abbrevs.push(data)
    // console.log("abbrevs data[0]:===============================================", data)
  })
  .on('end', () => {
    // console.log("abbrevs:===================================================", abbrevs);
  });

  //get all state data
let state_data = [];
createReadStream('state_data.csv')
  .pipe(csv())
  .on('data', (data) => state_data.push(data))
  .on('end', () => {
    // console.log("state_data:===================================================", state_data[0]["state"]);
  });

// get state/abbrev data
//TESTING REMOVING CSV PARSING CODE INTO ITS OWN METHODS
function getAllData(){
  let data = [];
  let index = 0;
  let state = "";
  let abbrev = ""
  console.log(`state data: ${state_data}`)
  console.log(`abbrevs: ${abbrevs}`)
  while (index < state_data.length){
    state = state_data[index]["state"];
    abbrev = abbrevs[index]["Code"];
    data.push(state + ", " + abbrev);
    index += 1;
  }
  return data;
}

// btnGet.addEventListener('click', () => {
//   let table = document.createElement('table');
//   let headerRow = document.createElement('tr');
//   headers.forEach(headerText => {
//       let header = document.createElement('th');
//       let textNode = document.createTextNode(headerText);
//       header.appendChild(textNode);
//       headerRow.appendChild(header);
//   });
//   table.appendChild(headerRow);
//   state_data.forEach(emp => {
//       let row = document.createElement('tr');
//       Object.values(emp).forEach(text => {
//           let cell = document.createElement('td');
//           let textNode = document.createTextNode(text);
//           cell.appendChild(textNode);
//           row.appendChild(cell);
//       })
//       table.appendChild(row);
//   });
//   myTable.appendChild(table);
// });
}
// export default {getAllData};
// export default {state_data};
// export default {abbrevs};