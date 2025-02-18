import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import Search from './modules/search.js';

export default class App{

    constructor(){
        console.log("App cargada correctamente");
        // Inicializar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
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
        Search();
        console.log("La aplicación de peliculas ha sido inicializada...")
    }
}