//console.log('Esto es una prueba')
const categories = [
  {
    id: 'travel',
    name: 'Travel',
    emoji: '✈️​',
    pairs: [
      {
        english: 'airport',
        spanish: 'aeropuerto'
      },
      {
        english: 'boarding pass',
        spanish: 'tarjeta de embarque'
      },
      {
        english: 'suitcase',
        spanish: 'maleta'
      },
      {
        english: 'flight',
        spanish: 'vuelo'
      },
      {
        english: 'departure',
        spanish: 'salida'
      },
      {
        english: 'arrival',
        spanish: 'llegada'
      },
      {
        english: 'customs',
        spanish: 'aduanas'
      },
      {
        english: 'passport',
        spanish: 'pasaporte'
      },
      {
        english: 'ticket',
        spanish: 'billete'
      },
      {
        english: 'hotel reservation',
        spanish: 'reserva de hotel'
      },
      {
        english: 'tourist attraction',
        spanish: 'atracción turística'
      },
      {
        english: 'currency exchange',
        spanish: 'cambio de divisa'
      },
      {
        english: 'luggage',
        spanish: 'equipaje'
      },
      {
        english: 'delayed flight',
        spanish: 'vuelo retrasado'
      },
      {
        english: 'window seat',
        spanish: 'asiento de ventana'
      },
      {
        english: 'travel insurance',
        spanish: 'seguro de viaje'
      },
      {
        english: 'check-in',
        spanish: 'facturación'
      },
      {
        english: 'destination',
        spanish: 'destino'
      },
      {
        english: 'tour guide',
        spanish: 'guía turístico'
      },
      {
        english: 'public transport',
        spanish: 'transporte público'
      }
    ]
  },
  {
  id: 'environment',
  name: 'Environment',
  emoji: '🌍',
  pairs: [
    {
      english: 'climate change',
      spanish: 'cambio climático'
    },
    {
      english: 'global warming',
      spanish: 'calentamiento global'
    },
    {
      english: 'pollution',
      spanish: 'contaminación'
    },
    {
      english: 'recycling',
      spanish: 'reciclaje'
    },
    {
      english: 'renewable energy',
      spanish: 'energía renovable'
    },
    {
      english: 'deforestation',
      spanish: 'deforestación'
    },
    {
      english: 'endangered species',
      spanish: 'especies en peligro de extinción'
    },
    {
      english: 'carbon footprint',
      spanish: 'huella de carbono'
    },
    {
      english: 'natural resources',
      spanish: 'recursos naturales'
    },
    {
      english: 'waste',
      spanish: 'residuos'
    },
    {
      english: 'solar panels',
      spanish: 'paneles solares'
    },
    {
      english: 'greenhouse gases',
      spanish: 'gases de efecto invernadero'
    },
    {
      english: 'water shortage',
      spanish: 'escasez de agua'
    },
    {
      english: 'energy consumption',
      spanish: 'consumo energético'
    },
    {
      english: 'environmental protection',
      spanish: 'protección medioambiental'
    },
    {
      english: 'air quality',
      spanish: 'calidad del aire'
    },
    {
      english: 'forest fire',
      spanish: 'incendio forestal'
    },
    {
      english: 'sustainable development',
      spanish: 'desarrollo sostenible'
    },
    {
      english: 'public transport',
      spanish: 'transporte público'
    },
    {
      english: 'plastic waste',
      spanish: 'residuos plásticos'
    }
  ]
}
];

//Variables para guardar contenido visual
let selectedCategory = null;

//Pantallas del juego
const startScreen = document.querySelector('.start-screen');
const buttonStart = document.querySelector('.button-start');
const categoryScreen = document.querySelector('.category-screen');
const categoriesContainer = document.querySelector('.categories-container');
const selectedCategoryTitle = document.querySelector('.selected-category-title');
const board = document.querySelector('.game-board');
const cardsContainer = document.querySelector('.cards-container');


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

    //Llamamos a una nueva funcion
    buttonCategory.addEventListener('click', () => {
      startGame(category);
    })

    categoriesContainer.appendChild(buttonCategory);
  })
}
renderCategories()

//Función para mostrar el titulo de la categoria en el tablero de juego
function startGame(category) {
  selectedCategory = category;
  selectedCategoryTitle.textContent = `Categoría: ${selectedCategory.name}`;

  categoryScreen.classList.add('hidden');
  board.classList.remove('hidden');

  renderBoard(selectedCategory);
}

//Función para crear un nuevo array con todas las cartas individualmente
function renderBoard(category) {
  //Limpiar el tablero para nueva partida
  cardsContainer.innerHTML = '';

  const cards = [];

  category.pairs.forEach((pair) => {
    cards.push(pair.english)
    cards.push(pair.spanish)
  });

  //Mezclar las cartas. Ordenamos con sort() y generamos un número aleatorio entre -0.5 y 0.5
  cards.sort(() => 
    Math.random() - 0.5);

  //Generación de cartas dinámicamente
  cards.forEach((cardValue) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
    cardElement.textContent = cardValue
    cardsContainer.appendChild(cardElement)
  });
}


//Escuchar acciones (eventos) del usuario. Escuchamos todos los click del tablero
board.addEventListener('click', (event) => {
  const clickCard = event.target.closest('.card'); //Se detecta si el click es en una carta

  if (clickCard) {
    clickCard.classList.toggle('is-flipped'); //Permite que al hacer click gire. Cambia el estado visual del elemento
  }
});



