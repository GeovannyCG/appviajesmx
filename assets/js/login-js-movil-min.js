//Declaracion del DOM donde se mostraran los mensaje de error y de los elementos del Formulario
let contenedoralerta = document.getElementById("alerts-app");
let user = document.getElementById("usuario");
let pass = document.getElementById("contraseña");

//Declaracion de los contenidos HTML para las alertas.

//Verificar el llenado del formulario
document.getElementById("send").addEventListener("click", () => {
    if (user.value == "" || pass.value == "") {
        contenedoralerta.innerHTML = `<div class="alert alert-warning alert-dismissible" role="alert">   <div>Llena ambos campos para acceder.</div>   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    } else {

        if(document.title == "Login movil - ViajesMX") {
            window.location.href = "./movile-version/home-movile-view.html";
        } else if(document.title == "Login tablet - ViajesMX") {
            window.location.href = "./tablet-version/home-tablet-view.html";  
        }
    }
});

//Mostrar la contraseña
document.getElementById("mostrar").addEventListener("change", () => {
    if (document.getElementById("mostrar").checked) {
        pass.type = "text";
    } else if (!document.getElementById("mostrar").checked) {
        pass.type = "password";
    }
});
