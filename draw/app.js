/*
generate 8 rows
each row will contain 8 cells 
*/

//it will generate one row

const containerEl = document.querySelector(".container");

function generateRow(row) {
  const rowEl = document.createElement("div");
  rowEl.classList.add("row");

  for (let i = 0; i < 8; i++) {
    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");

    //if row even
    //first element will be white

    if (row % 2 === 0) {
      if (i % 2 !== 0) {
        cellEl.style.background = "black";
        //black
      } else {
        //white
      }
    } else {
      if (i % 2 !== 0) {
        //black
      } else {
        cellEl.style.background = "black";
        //white
      }
    }

    //if row odd
    //first element will be black

    rowEl.appendChild(cellEl);
  }
  return rowEl;
}

for (let i = 0; i < 8; i++) {
  const row = generateRow(i);
  containerEl.appendChild(row);
}
