function redirect() {
    var select = document.getElementById("versionapp");
    var selectedOption = select.options[select.selectedIndex].value;

    if (selectedOption === "desk") {
        window.location.href = "./index.html";
    } else if (selectedOption === "movile") {
        window.location.href = "./index-movil-version.html";
    } else if (selectedOption === "table") {
        window.location.href = "./index-table-version.html";
    } else {
        alert("Selecciona una opción válida.");
    }
}
