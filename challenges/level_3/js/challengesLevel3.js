/**
 * Challenge #06
 * crear un h1 con el titulo "SOLICITUD DE DATOS"
 * rear un boton que diga solicitar datos en una funcion
 * El boton debe llamar los siguientes prompt
 * nombre-cedula-direccion-edad-telefono-correo-tipo de sangre - estado civil
 * en el HTML se deben mostratr todos estos datos
 * los textos deben tener el mismo tamaño de fuente de 20px y cada texto debe tener un color diferente
 * validar que ningun dato este vacio null o NaN
   sacar alert("datos imcompletos") no se mostraria ningun dato en pantalla
 */

//Solucion challenge #06
const btnGetData = document.getElementById("btnGetData");

function challengeSix() {
  // Etiquetas H2
  const userNameHtml = document.getElementById("userName");
  const dniHtml = document.getElementById("dni");
  const addressHtml = document.getElementById("address");
  const ageHtml = document.getElementById("age");
  const celPhoneHtml = document.getElementById("celPhone");
  const emailHtml = document.getElementById("email");
  const bloodTypeHtml = document.getElementById("bloodType");
  const civilStatusHtml = document.getElementById("civilStatus");
  // Solicitar datos al usuario
  const userName = prompt("Ingrese su nombre");
  const dni = prompt("Ingrese su cédula");
  const address = prompt("Ingrese su dirección");
  const age = parseInt(prompt("Ingrese su edad"));
  const celPhone = prompt("Ingrese su numero de celular");
  const email = prompt("Ingrese su correo");
  const bloodType = prompt("Ingrese su tipo de sangre");
  const civilStatus = prompt("Ingrese su estado civil");

  if (
    userName === "" ||
    userName === null ||
    dni === "" ||
    dni === null ||
    address === "" ||
    address === null ||
    isNaN(age) ||
    celPhone === "" ||
    celPhone === null ||
    email === "" ||
    email === null ||
    bloodType === "" ||
    bloodType === null ||
    civilStatus === "" ||
    civilStatus === null
  ) {
    alert(
      "Debes ingresat todos los datos de manera correcta para poder continuar."
    );
  } else {
    // Ingresar los valores de las variables a los H2
    userNameHtml.innerHTML = "Nombre: " + userName;
    dniHtml.innerHTML = "DNI: " + dni;
    addressHtml.innerHTML = "Dirección: " + address;
    ageHtml.innerHTML = "Edad: " + age;
    celPhoneHtml.innerHTML = "Celular: " + celPhone;
    emailHtml.innerHTML = "Correo: " + email;
    bloodTypeHtml.innerHTML = "Tipo de sangre: " + bloodType;
    civilStatusHtml.innerHTML = "Estado civil: " + civilStatus;
  }
}

btnGetData.onclick = function () {
  challengeSix();
};
