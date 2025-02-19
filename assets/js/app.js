import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import Search from './modules/search.js';
import editMovies from './modules/edit.js';
import deleteOfList from './modules/delete.js';

export default class App{

    constructor(){
        console.log("App cargada correctamente");
        // Inicializar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
        this.search = new Search();
    }
    load(){
        console.log("Cargando aplicación...");

        //Añadir pelicula
        this.add.peliSave();

        //conseguir array objetos LocalStorage
        const pelis = this.storage.getData();
        
        //Listar peliculas
        this.list.show(pelis)
        //Buscar peliculas
        this.search;
        console.log("La aplicación de peliculas ha sido inicializada...")
        deleteOfList();
        editMovies();
    }
}