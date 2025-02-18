export default class Storage{
    constructor(){
        console.log("✅ Storage.js cargado correctamente");

    }

    getData(){
        let pelis = JSON.parse(localStorage.getItem("pelis"));

        if(!pelis || pelis.length < 1){

            pelis = [
                {
                    id: 0,
                    title: 'Desarrollo web',
                    description: 'Google.com'
                }
            ];
            localStorage.setItem("lastId", 1); // Guardar el último ID
        }

        return pelis;
    }

    getLastId(){
        let lastId = localStorage.getItem("lastId");
        return lastId ? parseInt(lastId) : 0;
    }
    save(data){
        localStorage.setItem("pelis", JSON.stringify(data));
        //Actualizar lastId con el ID más alto
        let lastId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        localStorage.setItem("lastId", lastId);
    }
}