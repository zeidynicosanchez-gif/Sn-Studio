// ==========================================
// SN STUDIO - JavaScript sencillo
// ==========================================

// 1. Botón del menú (rayitas) para celulares: muestra u oculta el menú
var botonMenu = document.getElementById("boton-menu");
var menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");
});

// Al tocar un enlace del menú en celular, el menú se cierra
var enlaces = menu.querySelectorAll("a");
for (var i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function () {
    menu.classList.remove("abierto");
  });
}

// 2. Formulario de contacto (solo existe en contacto.html)
var formulario = document.getElementById("formulario");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita que la página se recargue

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var sesion = document.getElementById("sesion").value;
    var mensaje = document.getElementById("mensaje").value;

    // Mensaje que se enviará por WhatsApp al estudio
    var texto = "Hola SN Studio, soy " + nombre + " (tel: " + telefono + "). " +
                "Me interesa: " + sesion + ". " + mensaje;
    var enlace = "https://wa.me/50497762285?text=" + encodeURIComponent(texto);

    document.getElementById("mensaje-enviado").textContent =
      "¡Gracias " + nombre + "! Abriendo WhatsApp para enviar tu mensaje...";

    window.open(enlace, "_blank");
    formulario.reset();
  });
}
