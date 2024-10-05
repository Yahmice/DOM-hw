import './styles.css';
import characterSrc from './goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.game-board');

  //Само игровое поле
  const cells = [];
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    cells.push(cell);
  }

  // Создаем персонажа
  const character = document.createElement('img');
  character.src = characterSrc;
  character.style.width = '50px';
  character.style.height = '50px';

  // Ставим персонажа в рандомное место
  let currentCellIndex = Math.floor(Math.random() * cells.length);
  cells[currentCellIndex].appendChild(character);

  // Функция для рандомного перемещения персонажа
  function moveCharacter() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cells.length);
    } while (newIndex === currentCellIndex);

    cells[newIndex].appendChild(character);
    currentCellIndex = newIndex;
  }

  setInterval(moveCharacter, 1000);
});
