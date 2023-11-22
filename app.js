/**
 * El proposito de este JS es ayudar a contener todo el JS en un mismo lugar para que la App pueda funcionar de manera
 * correcta sin la necesidad de dividirlo en varios JS
 */

//Obtencion del titulo donde de la pagina donde se encuentre el usuario actualmente
let pantalla = document.title;

//Determinar que codigo se va a ejecutar cuando se encuentre en X pagina
if (pantalla === "Login - ViajesMX") {
    //Pantalla de login !!!!

    //Declaracion del DOM donde se mostraran los mensaje de error y de los elementos del Formulario
    let pass = document.getElementById("contraseña");

    //Mostrar la contraseña
    document.getElementById("mostrar").addEventListener("change", () => {
        if (document.getElementById("mostrar").checked) {
            pass.type = "text";
        } else if (!document.getElementById("mostrar").checked) {
            pass.type = "password";
        }
    });
} else if (
    pantalla == "Inicio - ViajesMX" ||
    pantalla == "Reservaciones - ViajesMX" ||
    pantalla == "Resultados de busqueda - ViajesMX" ||
    pantalla == "Contacto - ViajesMX" ||
    pantalla == "Detalles del destino - ViajesMX"
) {
    let usuario = document.getElementById("nombre-usuario");
    usuario.textContent = localStorage.getItem("session");

    document.getElementById("cerrar-session").addEventListener("click", () => {
        sessionStorage.removeItem("session");
    });

    //Funcion para hacer busqueda del usuario
    document.getElementById("button-addon1").addEventListener("click", () => {
        let busquedas = document.getElementById("buscador");

        location.href = "../desktop-version/search-computer-view.html?busqueda=" + busquedas.value;
    });

} else if (pantalla == "ViajesMX - Inicio Movil" ) { 
    //mostrar el correo del usuario en pantalla
    let usuario = document.getElementById("nombre-usuario");
    usuario.textContent = localStorage.getItem("session");

    //Cerrar la sesion de usuario actual
    document.getElementById("cerrar-session").addEventListener("click", () => {
        sessionStorage.removeItem("session");
    });

    //Buscador
    //Funcion para hacer busqueda del usuario
    document.getElementById("button-addon14").addEventListener("click", () => {
        let busquedas = document.getElementById("buscador1");

        location.href = "../movile-version/search-movile-view.html?busqueda=" + busquedas.value;
    });
}
