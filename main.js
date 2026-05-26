//console.log('Esto es una prueba')
const categories = [
  {
    id: 'travel',
    name: 'Travel',
    emoji: '✈️​'
  }
]

//Variables para guardar contenido visual
let selectedCategory = null;

//Pantallas del juego
const startScreen = document.querySelector('#start-screen');
const buttonStart = document.querySelector('#button-start');
const categoryScreen = document.querySelector('#category-screen');
const categoriesContainer = document.querySelector('#categories-container');
const selectedCategoryTitle = document.querySelector('#selected-category-title');
const board = document.querySelector('#game-board');

//Escuchar click
buttonStart.addEventListener('click', () => {
  //Ocultar pantalla de inicio
  startScreen.classList.add('hidden');
  //Mostrar pantalla de categorias
  categoryScreen.classList.remove('hidden');
})

//Función para leer categorías y transformarlas en botones
function renderCategories() {
  categories.forEach((category) => {
    const buttonCategory = document.createElement('button');
    buttonCategory.textContent = `${category.emoji} ${category.name}`;

    buttonCategory.addEventListener('click', () => {
      selectedCategory = category;
      selectedCategoryTitle.textContent = `Categoría: ${selectedCategory.name}`;

      categoryScreen.classList.add('hidden');
      board.classList.remove('hidden');
    })

    categoriesContainer.appendChild(buttonCategory);
  })
}
renderCategories()

//const board = document.querySelector('game-board'); //Seleccionar elementos del código HTML

//Escuchar acciones (eventos) del usuario. Escuchamos todos los click del tablero
board.addEventListener('click', (event) => {
  const clickCard = event.target.closest('.card'); //Se detecta si el click es en una carta

  if (clickCard) {
    clickCard.classList.toggle('is-flipped'); //Permite que al hacer click gire. Cambia el estado visual del elemento
  }
});



