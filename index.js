const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

const genClassName = (row, cell) => {
  let className = `box ${row}`
  
  if (cell === 1) {
    className += ' bl'
  }
  
  if (cell % 3 === 0) {
    className += ' br'
  }
  return className
}

const renderCells = () => {
  
  let board = document.getElementById('board')
  
  for (let i = 1; i <= 81; i++) {
    let box = document.createElement('div')
    
    // row is a - i
    let row = alpha[Math.ceil(i / 9) - 1]
    
    // cell number should be 9 for 9th cell in row, not 0
    let cell = i % 9 || 9
    
    box.className = genClassName(row, cell);
    box.id = `${row + cell}`
    board.appendChild(box)
    
    if (i % 9 === 0) {
      let br = document.createElement('br')
      board.appendChild(br)
    }
    
    
  }
  return board
}