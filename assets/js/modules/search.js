import Storage from "./storage.js";
import List from "./list.js";

export default function () {

    // crear los objetos
    const storage = new Storage();
    const list = new List();

    //conseguir elementos DOM
    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search");

    //Aplicar evento al formulario de busqueda
    search_btn.onclick = (e) => {
        e.preventDefault();

        //conseguir el texto introducido en el campo de busqueda
        let wanted = document.querySelector("#search_field").ariaValueMax;

        // conseguir datos de peliculas actualizadas
        let pelis_stored = storage.getData();

        //aplicar filtro para encontrar pelicula 
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });
        // mostrar el listado de coincidencias 
        if(new_pelis.length <= 0){
            content.innerHTML = "<div><h2>No hay coincidencias</h2></div>"
        }else {
            list.show(new_pelis);

        }
        return false
    };
}