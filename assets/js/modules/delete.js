import Storage from "./storage.js";
import List from "./list.js";

export default function deleteOfList(){
    console.log("Ejecutando deleteOfList...");

    //crear objetos
    const storage = new Storage();
    const list = new List(); // Instancia correcta de List

    // seleccionar todas las peliculas mostradas
    document.querySelectorAll("#content .peli-item").forEach(peli => {
        //capturar el botón
        let delete_btn = peli.querySelector('.delete');

       // aplicarle un evento click 
        if (delete_btn) {
            delete_btn.onclick = function() {
                console.log("Botón borrar clickeado", this);

                //conseguir el id de la pelicula que quiero borrar
                const peli_id = this.getAttribute('data-id');

                // filtrar el array para que elimine la que no quiero
                let pelis_stored = storage.getData();
                const new_pelis_stored = pelis_stored.filter(peli => peli.id !== parseInt(peli_id));
            
                // actualizar datos en el locaStorage
                storage.save(new_pelis_stored);

                // Volver a mostrar los datos del listado actualizados
                list.show(new_pelis_stored);
                
                // **Volver a asignar eventos de borrado después de actualizar la lista**
                deleteOfList();
        };
    }
    });
}