function verificarUsuario() {
    var usuario = document.getElementById("usuario").value;
    if (usuario === "") {
        alert("Debe ingresar un nombre de usuario.");
    }
}

function verificarContrasena() {
    var contrasena = document.getElementById("contrasena").value;
    if (contrasena === "") {
        alert("Debe ingresar una contraseña.");
    }
}
