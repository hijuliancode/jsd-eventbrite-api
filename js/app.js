// Instanciar Clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Variables
const searchButton = document.getElementById('buscarBtn');
const searchTextInput = document.getElementById('evento');
const selectCategories = document.getElementById('listado-categorias')

// Listeners
searchButton.addEventListener('click', buttonSearch);

// Functions
function buttonSearch(e) {
  e.preventDefault()
  const searchText = searchTextInput.value;
  const categorieSelected = selectCategories.options[selectCategories.selectedIndex].value;
  if(searchText !== '') {
    eventbrite.getEvents(searchText, categorieSelected)
      .then(data => {
        console.log('=> => =>', data);
      })
      searchTextInput.value = '';
  } else {
    ui.showMessage('Escribe algo en el buscador', 'alert alert-danger mt-3');
  }
  searchTextInput.focus();
}