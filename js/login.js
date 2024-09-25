document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const usuarioInput = document.getElementById("usuario").value;
    const contraseñaInput = document.getElementById("contraseña").value;

    fetch("../database/usrdatabase.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Compara las credenciales
        const usuarioValido = data.some(
          (user) =>
            user.usuario === usuarioInput && user.contraseña === contraseñaInput
        );

        if (usuarioValido) {
          console.log("Inicio de sesión exitoso");
          Swal.fire({
            position: "center+",
            icon: "success",
            title: "Inicio de sesión exitoso",
            showConfirmButton: false,
            timer: 3000,
          });

          setTimeout(
            (esperar) => (window.location.href = "../pages/index.html"),
            2000
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario o Contraseña Incorrectos",
          });
          document.getElementById("loginForm").reset();
        }
      })
      .catch((error) => {
        console.error("Hubo un problema con la petición fetch:", error);
      });
  });
