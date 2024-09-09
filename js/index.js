let visitantes = [];

function registrarVisita(name, email, oficina) {
  visitantes.push({ name, email, oficina });
  // para guardar en localStorage
  localStorage.setItem("productos", JSON.stringify(visitantes));
  /* localStorage.setItem("stock", visitantes); */
  // para actualizar la  lista de stock
  actualizarLista();
}

const formulario = document.getElementById("formulario");
/* const eliminarBtn = document.getElementById("eliminar");
const verStockBtn = document.getElementById("verStock"); */
const register = document.getElementById("agregar");

register.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const oficina = document.getElementById("oficina").value;
  registrarVisita(name, email, oficina);
  formulario.reset();
});

function actualizarLista() {
  const listaVisita = document.getElementById("registrados");
  registrados.innerHTML = "";
  visitantes.forEach((p) => {
    const li = document.createElement("li");
    li.textContent =
      " Nombre y Apellido: " +
      p.name +
      " Email: " +
      p.email +
      " Oficina a visitar: " +
      p.oficina;
    registrados.appendChild(li);
  });
}

/* let nameVisita;
let ageVisita;
let numRrhh = 0;
let numComp = 0;
let numTeso = 0;
let numSec = 0;
let startIssue = false;

const issueButton = document.querySelector("#inicioTramite");

issueButton.addEventListener("click", handleStartIssue);

function handleStartIssue() {
  alert("Bienvenido al sistema de ingreso de nuestra institución");

  alert(
    "Elija su trámite: \n 1) Dejar una nota \n 2) Ir a una oficina \n 3) Salir"
  );

  let menu = prompt("Ingrese el numero correspondiente a la opción deseada");

  switch (menu) {
    case "1":
      handleOption1();
      break;
    case "2":
      handleOption2();
      break;
    default:
      alert("Muchas gracias");
  }

  function handleOption1() {
    nameVisita = prompt("Ingrese su nombre y apellido");
    ageVisita = prompt("Ingrese su edad");
    alert(
      "Muchas gracias, " +
        nameVisita +
        "! Puede dejar la nota en Mesa de Entradas, planta baja. Hasta luego!"
    );
  }
  function handleOption2() {
    nameVisita = prompt("Ingrese su nombre y apellido");
    ageVisita = prompt("Ingrese su edad");
    alert(
      "Elija una oficina: \n 1) RRHH \n 2) Compras \n 3) Tesoreria \n 4) Secretaría "
    );
    let numOficina = prompt(
      "Ingrese el número correspondiente a la opción deseada"
    );
    if (numOficina == 1) {
      numRrhh++;
      alert(
        "La oficina de Recursos Humanos se encuentra en el 1er Piso, será llamado con numero " +
          numRrhh
      );
    } else if (numOficina == 2) {
      numComp++;
      alert(
        "La oficina de Compras se encuentra en el 2do Piso, será llamado con numero " +
          numComp
      );
    } else if (numOficina == 3) {
      numTeso++;
      alert(
        "La oficina de Tesoreria se encuentra en el 3er Piso, será llamado con numero " +
          numTeso
      );
    } else if (numOficina == 2) {
      numSec++;
      alert(
        "La oficina de Secretaría se encuentra en el 1er Piso, será llamado con numero " +
          numSec
      );
    }
  }
}
 */
