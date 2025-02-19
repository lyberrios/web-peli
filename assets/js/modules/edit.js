import Storage from "./storage.js";
import List from "./list.js";

export default function editMovies() {
    console.log("Ejecutando editMovies...");
    // crear los objetos
    const storage = new Storage();
    const list = new List();

    // conseguir datos de peliculas
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");

    // recorrer peliculas mostradas
    pelis_viewed.forEach(peli => {
        // seleccionar el boton de editar

        let edit_btn = peli.querySelector(".edit");

        // Verificar si el botón existe antes de asignarle un evento
        if (edit_btn) {
            edit_btn.onclick = function () {
                console.log("Boton editar clickeado", peli);

                // conseguir la ID de la película a editar
                const peli_id = parseInt(this.getAttribute("data-id"));

                // ocultar los botones de edición y eliminación
                edit_btn.style.display = "none";
                peli.querySelector(".delete").style.display = "none";

                // añadir un formulario de edición
                let peli_edit_html = `
                <div class="edit_form">
                    <hr>
                    <h3 class="title">Editar películas</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}">
                        <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar"/>
                        <button type="button" class="cancel">Cancelar</button>

                    </form>
                </div>`;

                peli.innerHTML += peli_edit_html;

                // Seleccionar los botones dentro del nuevo formulario
                let update_btn = peli.querySelector(".update");
                let cancel_btn = peli.querySelector(".cancel");


                //  Aplicar evento `onclick` al botón de actualizar
                update_btn.onclick = function (e) {
                    e.preventDefault();

                    console.log("Botón actualizar clickeado");

                    //seleccionar inputs dentro de este elemento peli
                    let edited_title = peli.querySelector(".edited_title").value;
                    let edited_description = peli.querySelector(".edited_description").value;

                    // Buscar el índice de la película a actualizar
                    let index = pelis_stored.findIndex(peli => peli.id === peli_id);

                    // Actualizar los datos de la película en el array
                    if (index !== -1) {
                        // Actualizar los datos en el array
                        pelis_stored[index] = {
                            id: peli_id,
                            title: edited_title,
                            description: edited_description
                        };

                        // Guardar en localStorage
                        storage.save(pelis_stored);

                        //volver a mostrar el listado
                        list.show(pelis_stored);

                        // Volver a asignar eventos de edición y eliminación después de la actualización
                        editMovies();
                    };
                };
                // **Evento para cancelar la edición**
                cancel_btn.onclick = function () {
                    console.log("Edición cancelada");

                    // Volver a mostrar la lista sin cambios
                    list.show(pelis_stored);

                    // Volver a asignar eventos de edición y eliminación después de cancelar
                    editMovies();
                }
            };
        }
    });
}