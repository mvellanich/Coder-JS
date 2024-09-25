/* let visitantes = [];

function registrarVisita(name, email, oficina) {
  visitantes.push({ name, email, oficina });
  // para guardar en localStorage
  localStorage.setItem("visitas", JSON.stringify(visitantes));

  actualizarLista();
  console.log(visitantes);
}

const formulario = document.getElementById("formulario");
const register = document.getElementById("agregar");

register.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const oficina = document.getElementById("oficina").value;
  const datosVisitante = [name, email, oficina];
  registrarVisita(name, email, oficina);
  formulario.reset();
  Swal.fire({
    icon: "success",
    text: "Registro Exitoso",
    iconColor: "#2B5F4D",
    confirmButtonColor: "#2B5F4D",
  });
});

function actualizarLista() {
  const listaVisita = document.getElementById("registrados");
  registrados.innerHTML = "";
  visitantes.forEach((p) => {
    const ul = document.createElement("div");
    ul.innerHTML = `
      <b>Nombre y Apellido: </b>${p.name}
      <b>Email: </b> ${p.email}
      <b>Oficina: </b> ${p.oficina}
      `;
    registrados.appendChild(ul);
  });
}
 */
/* // Agregar el producto al localStorage
let carrito = JSON.parse(localStorage.getItem("formulario")) || [];
carrito.push({ name, email, oficina });
localStorage.setItem("formulario", JSON.stringify(carrito)); */

// Función para guardar la reserva en localStorage
// function guardarVisitante(visitantes) {
//   let datosVisitantes =
//     JSON.parse(localStorage.getItem("datosVisitante")) || [];
//   datosVisitantes.push(visitantes);
//   localStorage.setItem("datosVisitantes", JSON.stringify(datosVisitantes));
// }

// function cargarVisitantes() {
//   let datosVisitantes =
//     JSON.parse(localStorage.getItem("datosVisitantes")) || [];
//   datosVisitantes.forEach((visitantes) => actualizarLista(visitantes));
// }

// guardarVisitante(visitantes);
// cargarVisitantes();
/* 






document.getElementById("agregar").addEventListener("click", function () {
  // Obtiene los valores del formulario
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const oficina = document.getElementById("oficina").value;

  // Verifica que todos los campos estén completos
  if (nombre === "" || email === "" || oficina === "") {
    alert("Por favor complete todos los campos");
    return;
  }

  // Crea una nueva fila
  const tabla = document
    .getElementById("tabla")
    .getElementsByTagName("tbody")[0];
  const nuevaFila = tabla.insertRow();

  // Inserta las celdas
  const celdaNombre = nuevaFila.insertCell(0);
  const celdaEmail = nuevaFila.insertCell(1);
  const celdaOficina = nuevaFila.insertCell(2);
  const celdaAccion = nuevaFila.insertCell(3);

  // Asigna los valores a las celdas
  celdaNombre.textContent = nombre;
  celdaEmail.textContent = email;
  celdaOficina.textContent = oficina;

  // Crea el botón de eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", function () {
    // Elimina la fila actual
    tabla.deleteRow(nuevaFila.rowIndex - 1); // -1 para ajustar el índice
  });
  celdaAccion.appendChild(botonEliminar);

  // Limpiar formulario después de enviar
  document.getElementById("formulario").reset();
});
 */

document.addEventListener("DOMContentLoaded", function () {
  // Cargar los datos del localStorage al cargar la página
  cargarDatos();

  document.getElementById("agregar").addEventListener("click", function () {
    // Obtiene los valores del formulario
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const oficina = document.getElementById("oficina").value;

    // Verifica que todos los campos estén completos
    if (nombre === "" || email === "" || oficina === "") {
      alert("Por favor complete todos los campos");
      return;
    }

    console.log("Agregar fila:", { nombre, email, oficina });

    // Añade los datos a la tabla
    agregarFila(nombre, email, oficina);

    // Guarda los datos en localStorage
    guardarDatos();

    // Limpiar formulario después de enviar
    document.getElementById("formulario").reset();
  });
});

function agregarFila(nombre, email, oficina) {
  const tabla = document
    .getElementById("tabla")
    .getElementsByTagName("tbody")[0];

  // Crea una nueva fila
  const nuevaFila = tabla.insertRow();
  console.log("Nueva fila creada");

  // Inserta las celdas
  const celdaNombre = nuevaFila.insertCell(0);
  const celdaEmail = nuevaFila.insertCell(1);
  const celdaOficina = nuevaFila.insertCell(2);
  const celdaAccion = nuevaFila.insertCell(3);

  // Asigna los valores a las celdas
  celdaNombre.textContent = nombre;
  celdaEmail.textContent = email;
  celdaOficina.textContent = oficina;

  // Crea el botón de eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("botoncitos-eliminar"); // Agregar clase compartida
  botonEliminar.addEventListener("click", function () {
    // Elimina la fila actual
    tabla.deleteRow(nuevaFila.rowIndex - 1); // -1 para ajustar el índice

    // Actualiza el localStorage
    guardarDatos();
  });
  celdaAccion.appendChild(botonEliminar);
}

function guardarDatos() {
  const filas = document.querySelectorAll("#tabla tbody tr");

  const datos = [];

  filas.forEach((fila) => {
    const nombre = fila.cells[0].textContent;
    const email = fila.cells[1].textContent;
    const oficina = fila.cells[2].textContent;

    datos.push({ nombre, email, oficina });
  });

  console.log("Guardando datos en localStorage:", datos);

  // Guarda los datos en el localStorage como un string JSON
  localStorage.setItem("datosTabla", JSON.stringify(datos));
}

function cargarDatos() {
  const datosGuardados = localStorage.getItem("datosTabla");

  // Si hay datos guardados, los convierte de JSON a un array
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    console.log("Cargando datos desde localStorage:", datos);

    // Recorre el array y agrega cada fila a la tabla
    datos.forEach((dato) => {
      agregarFila(dato.nombre, dato.email, dato.oficina);
    });
  }
}

function guardarDatos() {
  const filas = document.querySelectorAll("#tabla tbody tr");

  const datos = [];

  filas.forEach((fila) => {
    const nombre = fila.cells[0].textContent;
    const email = fila.cells[1].textContent;
    const oficina = fila.cells[2].textContent;

    datos.push({ nombre, email, oficina });
  });

  console.log("Guardando datos en localStorage:", datos);

  // Guarda los datos en el localStorage como un string JSON
  localStorage.setItem("datosTabla", JSON.stringify(datos));
}

function cargarDatos() {
  const datosGuardados = localStorage.getItem("datosTabla");

  // Si hay datos guardados, los convierte de JSON a un array
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    console.log("Cargando datos desde localStorage:", datos);

    // Recorre el array y agrega cada fila a la tabla
    datos.forEach((dato) => {
      agregarFila(dato.nombre, dato.email, dato.oficina);
    });
  }
}

document.getElementById("botoncitos").addEventListener("click", function () {
  window.location.href = "../pages/registro.html";
});
