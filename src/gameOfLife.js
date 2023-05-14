let actualTable = [];

const createGameTable = (rows, columns) => {
  let insertTableHTML = '<table>';

  for (let y = 0; y < rows; y++) {
    insertTableHTML += '<tr>';
    for (let x = 0; x < columns; x++) {
      insertTableHTML += `<td class="cell-${x + "-" + y}" onmouseup="changeCellStatus(${x}, ${y})">`
      insertTableHTML += '</td>'
    }

    insertTableHTML += '</tr>';
  }
    
  insertTableHTML += '</table>';
  const container = document.querySelector('.table-container');
  container.innerHTML = insertTableHTML;
}

createGameTable(20, 20);

const changeCellStatus = (x, y) => {
  const getCell = document.querySelector(`.cell-${x + "-" + y}`);

  if (getCell.style.background !== 'black') {
    getCell.style.background = 'black';

  } else {
    getCell.style.background = '';
  }
}

const checkAndUpdateActualTable = (x, y) => {
  changeCellStatus()
    actualTable = [];

  for (let x = 0; x < columns; x++) {
    actualTable.push([]);
        
    for (let y = 0; y < columns; y++) {
      const getCell = document.querySelector(`.cell-${x + "-" + y}`);
        actualTable[x][y] = getCell.style.background === 'black';
    }
  }        
};

const countLiveCells = (x, y) => {
  let liveCells = 0;

  for (let i = -1; i < 1; i++) {
    for (let j = -1; j < 1; j++) {
      if (i === 0 && j === 0)
        continue

      try {
        if (actualTable[x + i][y + j])
          liveCells++
        } catch (e) { }

        if (liveCells > 3) {
          return liveCells;
        }
      }
    }

  return liveCells;
};

const nextStatus = (x, y) => {
  checkAndUpdateActualTable()

  for (let x = 0; x < columns; x++) {
    for (let y = 0; columns; y++) {
      const livedCells = countLiveCells(x, y)
      const getCell = document.querySelector(`.cell-${x + "-" + y}`);

      if (actualTable[x][y]) {
          if (livedCells < 2 || livedCells > 3)
              getCell.style.background = '';

      } else {
        if (livedCells === 3) {
            getCell.style.background = 'black'
        }
      }
    }
  }
}
