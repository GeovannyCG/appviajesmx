document.getElementById('btnCorreo').addEventListener("click", () => {
    let terminos = document.getElementById('flexCheckDefault');
    let correo = document.getElementById('exampleFormControlInput1');
    let mensaje = document.getElementById('exampleFormControlTextarea1');

    let contenedor_error = document.getElementById('message-error');

    if(correo.value == "" || mensaje.value == "") {
        contenedor_error.innerHTML = `
        <div class="alert alert-primary alert-dismissible" role="alert">   <div>Llena ambos campos del formulario.</div>   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>
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