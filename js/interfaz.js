class Interfaz {
  constructor() {
    const searchButton = document.getElementById('buscarBtn');
    // Inicializar App
    this.init();

    // El lugar donde vamos a insertar los eventos
    this.list = document.getElementById('resultado-eventos');
  }
  init() {
    this.printCategories();
  }
  printCategories() {
    const categoriesList = eventbrite.getCategories();
    categoriesList
      .then(res => {
        const cats = res.categories.categories;
        console.log(cats);
        const selectCategorie = document.getElementById('listado-categorias');

        cats.forEach(categorie => {
          const option = document.createElement('option');
          option.value = categorie.id;
          option.appendChild(document.createTextNode(categorie.name_localized))
          selectCategorie.appendChild(option)
        })
      })
  }
  showMessage(message, cssClass) {
    const div = document.createElement('div')
    div.className = cssClass;
    div.appendChild(document.createTextNode(message));

    document.querySelector('#buscador').insertBefore(div, searchButton);

    setTimeout(() => {
      this.removeMessage();
    }, 2000)
  }
  removeMessage() {
    const alertMessage = document.querySelector('.alert');
    (alertMessage) ? alertMessage.remove() : null;
  }
}