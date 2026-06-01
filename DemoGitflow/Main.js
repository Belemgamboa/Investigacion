document
    .getElementById("formRegistro")
    .addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const modalidad = document.getElementById("modalidad").value;

    if(nombre === "" || correo === ""){
        alert("Por favor complete todos los campos.");
        return;
    }

    alert(
        "Registro exitoso.\n\n" +
        "Nombre: " + nombre +
        "\nCorreo: " + correo +
        "\nModalidad: " + modalidad
    );

    this.reset();
});

