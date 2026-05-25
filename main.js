//console.log('Esto es una prueba')

//Pantallas del juego
const startScreen = document.getElementById('start-screen');
const categoryScreen = document.getElementById('category-screen');
const buttonStart = document.getElementById('button-start');
const board = document.getElementById('game-board');

//Escuchar click
buttonStart.addEventListener('click', () => {
  //Ocultar pantalla de inicio
  startScreen.classList.add('hidden');
  //Mostrar pantalla de categorias
  categoryScreen.classList.remove('hidden');
})

//const board = document.getElementById('game-board'); //Seleccionar elementos del código HTML

//Escuchar acciones (eventos) del usuario. Escuchamos todos los click del tablero
board.addEventListener('click', (event) => {
  const clickCard = event.target.closest('.card'); //Se detecta si el click es en una carta

  if (clickCard) {
    clickCard.classList.toggle('is-flipped'); //Permite que al hacer click gire. Cambia el estado visual del elemento
  }
});



