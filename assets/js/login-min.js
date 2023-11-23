//Funcion para mostrar y ocultar la contrasña
document.getElementById("flexSwitchCheckDefault").addEventListener("change", (e) => {
    if (document.getElementById("flexSwitchCheckDefault").checked) {
        document.getElementById("inputPass").type = "password";
    } else {
        document.getElementById("inputPass").type = "text";
    }
});

//Determinacion de si los campos estan llenos o no

let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('inputPass');

document.getElementById('btnIngresar').addEventListener("click", () => {
    if(usuario.value == "" || contraseña.value == "") {
        document.getElementById('liveAlertPlaceholder').innerHTML = `
        <div class="alert alert-danger alert-dismissible" role="alert">
            <div>Ingresa tus credenciales para poder acceder.</div> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    } else {
        window.location.href = "../desktop-version/home-computer-view.html";
    } 
});
