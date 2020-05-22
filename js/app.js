// Instanciar Clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Variables
const searchButton = document.getElementById('buscarBtn');
const searchText = document.getElementById('evento');
const selectCategories = document.getElementById('listado-categorias')

// Listeners
searchButton.addEventListener('click', buttonSearch);

// Functions
function buttonSearch(e) {
  e.preventDefault()
  const eventToSearch = searchText.value;
  const categorieSelected = selectCategories.options[selectCategories.selectedIndex].value;
  
  if(eventToSearch !== '') {
    // console.log(categorieSelected)
    console.log('Buscando...');
    
    searchText.value = '';
  } else {
    ui.showMessage('Escribe algo en el buscador', 'alert alert-danger mt-3');
  }
  searchText.focus();
}