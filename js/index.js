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
      Swal.fire({
        icon: "warning",
        title: "Por favor complete todos los campos!",
      });

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

  // Ejemplo de uso
  // Llama a esta función y pasa el ID de la fila que deseas eliminar
  // confirmarEliminacion('fila-1');

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
