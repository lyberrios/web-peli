import App from './app.js';

document.addEventListener("DOMContentLoaded", () => {
    // Crear el objeto app
    const peli_app = new App();

    //Cargar toda la aplicación
    peli_app.load();
});