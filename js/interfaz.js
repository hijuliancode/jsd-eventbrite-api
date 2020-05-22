class Interfaz {
  constructor() {
    // Inicializar App
    this.init();

    // El lugar donde vamos a insertar los eventos
    this.list = document.getElementById('resultado-eventos');
  }
  init() {
  }
  printCategories() {
    const categoriesList = eventbrite.getCategories();
    console.log(categoriesList);
  }
}