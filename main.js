//console.log('Esto es una prueba')
  const board = document.getElementById('game-board');
  
  board.addEventListener('click', (event) => {
    const clickCard = event.target.closest('.card');
    
    if (clickCard) {
        clickCard.classList.toggle('is-flipped'); //Permite que al hacer click gire
    }
  });
