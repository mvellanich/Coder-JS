let visitantes = [];

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
