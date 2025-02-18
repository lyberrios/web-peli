import Storage from './storage.js';
import List from './list.js';
import deleteOfList from "./delete.js";

export default class Add{

    constructor(){
        //Crear objetos
        this.storage = new Storage();
        this.list = new List();

        // conseguir elementos del DOM a utilizar
        this.title_field = document.querySelector("#title");
        this.description_field = document.querySelector("#description")
        this.save_btn = document.querySelector("#save")
    }

    peliSave(){
        console.log("Ejecutando peliSave..."); // <-- Verificación
        this.save_btn.onclick = (e) => {
            e.preventDefault();
            console.log("Botón 'Guardar' clickeado"); // <-- Verificación

            //conseguir datos actualizados
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis,lastId);

            // Datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            // pequena validacion
            if(title !== "" && description !== ""){
                
                //crear objeto a guardar
                let peli = {
                    id: lastId + 1,  // Asegurar que el ID se incrementa correctamente
                    title,
                    description,
                };

                //añadir al array de objetos
                pelis.push(peli);

                //guardar en el local storage
                this.storage.save(pelis);

                //actualizar el listado
                this.list.show(pelis);

                // **Volver a asignar eventos de eliminar después de actualizar la lista**
                deleteOfList();

                 // **Resetear los campos después de agregar la película**
            this.title_field.value = "";
            this.description_field.value = "";

        } else {
            alert("Introduce bien los datos y la descripción en el formulario");
        }
        return false;
    };
    }
}