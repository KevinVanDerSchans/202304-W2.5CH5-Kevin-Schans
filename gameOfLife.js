const createGameTable = (rows, columns) => {
  let insertTableHTML = '<table>';

  for (let i = 0; i < rows; i++) {
      insertTableHTML += '<tr>';
          for (let j = 0; j < columns; j++) {
              insertTableHTML += `<td class="cell-${j + "-" + i}">`
              insertTableHTML += '</td>'
          }
          
      insertTableHTML += '</tr>';
  }
  
  insertTableHTML += '</table>';
  const container = document.querySelector('.table-container');
  container.innerHTML = insertTableHTML;
};

createGameTable(20, 20);

const changeCellStatus = (x, y) => {
    const getCell = document.querySelector(`.cell-${x + "-" + y}`);
    
    if (getCell.style.background !== 'black') {
        getCell.style.background = 'black';
        
    } else {
        getCell.style.background = '';
    }
}
changeCellStatus(x, y)
