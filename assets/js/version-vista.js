function redirect() {
    var select = document.getElementById("versionapp");
    var selectedOption = select.options[select.selectedIndex].value;

    if (selectedOption === "desk") {
        window.location.href = "../desktop-version/home-computer-view.html";
    } else if (selectedOption === "movile") {
        window.location.href = "../movile-version/home-movile-view.html";
    } else if (selectedOption === "table") {
        window.location.href = "../tablet-version/home-tablet-view.html";
    } else {
        alert("Selecciona una opción válida.");
    }
}

//ESTO ES DE LA VERISON DE WEB

//Escucha el evento de clic en el boton del buscador y simula que se hace la busqueda
document.getElementById('button-addon1').addEventListener("click", () => {
    if (document.title == "Inicio web - ViajesMX") {
        location.href = '../desktop-version/search-computer-view.html';    
    } else if(document.title == "Inicio tablet - ViajesMX") {
        location.href = '../tablet-version/search-tablet-view.html';
    }
    
});

//(Contacto de la version web): hace la validacion del formulario
document.getElementById('btnCorreo').addEventListener("click", () => {
    let terminos = document.getElementById('flexCheckDefault');
    let correo = document.getElementById('exampleFormControlInput1');
    let mensaje = document.getElementById('exampleFormControlTextarea1');

    let contenedor_error = document.getElementById('message-error');

    if(correo.value == "" || mensaje.value == "") {
        contenedor_error.innerHTML = `
        <div class="alert alert-primary alert-dismissible" role="alert">   <div>Por favor llena ambos campos del formulario.</div>   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>
        `;
    } else {
        if(!terminos.checked) {
            contenedor_error.innerHTML = `
        <div class="alert alert-warning alert-dismissible" role="alert">   <div>Acepta los terminos y condiciones.</div>   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>
        `;
        } else {
            contenedor_error.innerHTML = `
        <div class="alert alert-success alert-dismissible" role="alert">   <div>Tu mensaje se envio correctamente.</div>   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>
        `;
        }
    }
});