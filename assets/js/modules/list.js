import deleteOfList from "./delete.js";
import edit from "./edit.js";

export default class List{
    constructor(){
        //seleccionar elementos del dom a usar
        this.content = document.querySelector("#content");
    }

    peliTemplate(peli){
        return `
        <article class="peli-item" id="peli-${peli.id}">
                <h3 class="title">${peli.title}</h3>
                <p class="description">${peli.description}</p>
            
                <button class="edit" data-id="${peli.id}">Editar</button>
                <button class="delete" data-id="${peli.id}">"Borrar"</button>

            </article>
        `;
    }

    show(pelis){
        //vacia dom del contenedor de peliculas
        this.content.innerHTML = "";

       // recorrer y mostrar todos los objetos/peliculas del localstorage 
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
            
        });

        // funcionalidad botones de borrado
        deleteOfList(this);

        // Funcionalidad botones de edición
    }

   // addToList(peli){
   //     pelis.forEach(peli => {
  //          this.content.innerHTML += this.peliTemplate(peli);
   // });
}
