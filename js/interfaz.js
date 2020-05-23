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
  cleanResults() {
    this.list.innerHTML = '';
  }
  showEvents(events) {
    this.cleanResults();
    const eventsList = events.events;
    eventsList.forEach((event) => {
      this.list.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url : ''}" />
            <div class="card-body">
              <div class="card-text">
                <h2 class="text-center">${event.name.text}<h2>
                <p class="lead text-info">Información del evento: <p>
                <p>${event.description.text.substring(0, 280)}...<p>
                <span class="badge badge-primary">${event.capacity}<span>
                <span class="badge badge-secondary">${event.start.local}<span>
                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos<a>
              <div>
            <div>
          <div>
        <div>
      `;
    })
  }
}