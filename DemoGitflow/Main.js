// Captura el evento de envío del formulario
document
    .getElementById("formRegistro")
    .addEventListener("submit", function(event){

    // Evita que la página se recargue al enviar
    event.preventDefault();

    // Obtiene los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const modalidad = document.getElementById("modalidad").value;

    // Valida que los campos obligatorios no estén vacíos
    if(nombre === "" || correo === ""){
        alert("Por favor complete todos los campos.");
        return;
    }

    // Muestra los datos registrados
    alert(
        "Registro exitoso.\n\n" +
        "Nombre: " + nombre +
        "\nCorreo: " + correo +
        "\nModalidad: " + modalidad
    );

    // Limpia el formulario después del registro
    this.reset();
});