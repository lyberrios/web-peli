import Storage from "./storage.js";
import List from "./list.js";

export default function () {
    // crear los objetos

    const storage = new Storage();
    const list = new List();

    // conseguir datos de peliculas
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");

    // recorrer peliculas mostradas
    pelis_viewed.forEach(peli => {

    })

    // seleccionar el boton de editar

    // asignar un evento click
    edit_btn.onclick = function () {
        //conseguir la id de la pelicula a editar
        const peli_id = parseInt(this.getAttribute("data-id"));

        // quitar botones
        edit_btn.remove();
        peli.querySelector(".delete").remove();

        // añadir un trozo de html debajo de los botones
        let peli_edit_html = `
    <div class="edit_form>
    <hr>
    <h3 class="title">Editar películas</h3>
    <form>
    <input type="text" class="edited_tittle" value="${peli.querySelector(".title").innerHTML}>
    <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
    <input type="submit" class="update" value="Actualizar"/>
    </form>
    </div>`;

        peli.innerHTML += peli_edit_html;

        //seleccionar el boton de actualizar
        let update_btn = peli.querySelector(".update");

        //aplicar evento click
        update_btn.onclick = function (e) {
            e.preventDefault();

            //buscar indice de la pelicula a actualizar
            let index = pelis_stored.findIndex(peli => peli.id === peli_id);

            //guardar objeto dentro de ese indice
            pelis_stored[index] = {
                id: peli_id,
                title: peli.querySelector(".edited_title").value,
                description: peli.querySelector(".edited_description").value
            };


            //actualizar localStorage
            storage.save(pelis_stored);
            console.log(pelis_stored)
            //volver a mostrar el listado
            list.show(pelis_stored);
            return false;
        }
    }
}