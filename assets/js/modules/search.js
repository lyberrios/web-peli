import Storage from "./storage.js";
import List from "./list.js";

export default class Search {

    constructor() {
    // crear los objetos
        this.storage = new Storage();
        this.list = new List();
    // Conseguir elementos DOM
        this. content = document.querySelector("#content");
        this.searchField = document.querySelector("#search_field");
        this.searchBtn = document.querySelector("#search");
    
    //Aplicar evento al formulario de busqueda
        this.searchBtn.addEventListener("click", (e) => this.searchMovies(e));

    }
    searchMovies(e){
        e.preventDefault();

        // Obtener el texto de búsqueda y limpiar espacios
        const query = this.searchField.value.trim().toLowerCase();

        // Verificar si el campo de búsqueda está vacío
        if (query === "") {
            this.list.show(this.storage.getData());
            return
        }
        //conseguir datos de peliculas almacenadas
        let pelis_stored; 
        try {
            pelis_stored = this.storage.getData();
        } catch (error) {
            console.error("Error al obtener los datos almacendos: ", error);
            this.content.innerHTML= `<div><h2>Error al cargar datos</h2></div>`;
            return;
        }
        // Aplicar filtro ignorando acentos y caracteres especiales
        const normalizedQuery = this.normalizeText(query);

        const filteredMovies = pelis_stored.filter(peli => {
            const normalizedTitle = this.normalizeText(peli.title.toLowerCase())
            return normalizedTitle.includes(normalizedQuery);
        });
        // Mostrar resultados o mensaje de "sin coincidencias"
        if (filteredMovies.length > 0){
            this.list.show(filteredMovies);
        }else {
            this.content.innerHTML = `<div><h2>No hay coincidencias</h2></div>`
        }
    }
    //Funcion para normalizar texto eliminando acentos y caracteres especiales
    normalizeText(text){
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}   