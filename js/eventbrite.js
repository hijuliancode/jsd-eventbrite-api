class EventBrite {
  constructor() {
    this.token_oauth = '2XFWKR7EPD645FB45HPO';
    this.order = 'date';
  }
  // Obtiene las categorías en el Init
  async getCategories() {
    // Consulta las categorías a la REST API de eventbrite
    const respCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_oauth}`);

    // Esperar la respuesta de las categorías y devolver un JSON
    const categories = await respCategories.json()

    return {
      categories
    };
  }
  async getEvents(event, category) {
    // Consulta los eventos a la REST API de eventbrite
    const respEvents = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.order}&categories=${category}&token=${this.token_oauth}`);

    // Esperar la respuesta de los eventos y devolver un JSON
    const events = await respEvents.json()

    return {
      events
    };
  }
}