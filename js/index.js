document.addEventListener("DOMContentLoaded", function () {
  // Cargar los datos del localStorage al cargar la página
  cargarDatos();

  document.getElementById("agregar").addEventListener("click", function () {
    // Obtiene los valores del formulario
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const oficina = document.getElementById("oficina").value;

    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: "Los datos se han registrado correctamente.",
    });

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
  if (!email.includes("@")) {
    // Mostrar un mensaje de error si el email no es válido
    Swal.fire({
      icon: "error",
      title: "Dirección de correo no válida",
      text: "La dirección debe contener @",
    });
    return; // Salir de la función para evitar agregar una fila inválida
  }
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
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        tabla.deleteRow(nuevaFila.rowIndex - 1); // Elimina la fila
        guardarDatos(); // Actualiza localStorage después de eliminar
        Swal.fire("Eliminado!", "La fila ha sido eliminada.", "success");
      }
    });
  });

  celdaAccion.appendChild(botonEliminar);
}

// Función para guardar datos en localStorage
function guardarDatos() {
  const filas = document.querySelectorAll("#tabla tbody tr");
  const datos = [];
  filas.forEach((fila) => {
    const nombre = fila.cells[0].textContent;
    const email = fila.cells[1].textContent;
    const oficina = fila.cells[2].textContent;
    datos.push({ nombre, email, oficina });
  });
  localStorage.setItem("datosTabla", JSON.stringify(datos));
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
