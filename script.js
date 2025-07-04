// Primero consigo  los elementos del formulario 
const form = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const mensajeExito = document.getElementById("mensaje-exito");

// Esta función revisa si el correo está bien escrito 
function esEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Esta parte muestra un mensaje cuando el formulario se envía bien
function mostrarMensajeExito(nombreUsuario) {
  mensajeExito.innerHTML = `Gracias por contactarnos, ${nombreUsuario}. Te responderemos pronto.`;
}

// Estafunción es principal ya que valida el formulario cuando se envía
function validarFormulario(event) {
  event.preventDefault(); 

  mensajeExito.innerHTML = "";

  // en esta parte se revisa que todos los campos estén llenos
  if (
    nombre.value.trim() === "" ||
    correo.value.trim() === "" ||
    mensaje.value.trim() === ""
  ) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // aqui si el correo tiene el formato que corresponde
  if (!esEmailValido(correo.value)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Si todo está bien, guardo los datos 
  const nombreUsuario = nombre.value.trim();

  // Muestro el mensaje de éxito
  mostrarMensajeExito(nombreUsuario);

  form.reset();
}

form.addEventListener("submit", validarFormulario);

// Esta función oculta todas las secciones antes de mostrar una
function ocultarTodo() {
  document.getElementById("productos").classList.add("oculto");
  document.getElementById("ubicacion").classList.add("oculto");
  document.getElementById("contacto").classList.add("oculto");
}

// aquii se muestra la sección de productos
function verProductos() {
  ocultarTodo();
  document.getElementById("productos").classList.remove("oculto");
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
}

//aqui la sección de ubicación
function verUbicacion() {
  ocultarTodo();
  document.getElementById("ubicacion").classList.remove("oculto");
  document.getElementById("ubicacion").scrollIntoView({ behavior: "smooth" });
}

// aqui la sección de contacto
function verContacto() {
  ocultarTodo();
  document.getElementById("contacto").classList.remove("oculto");
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}
