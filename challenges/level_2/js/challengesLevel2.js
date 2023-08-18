/**
 * Challenge #03
 *
 * Realizar el pedido de 4 datos personales:
 *userName
 *age
 *country
 *leftOrRigh
 *
 * la variable leftOrRigh ponen si la persona es zurda o derecha
 *
 * el algoritmo tiene como mision otorgar una beca de estudio a las personas que sean mayores de edad y que su pais de residencia sea colombia y su mano habil sea la izquierda
 *
 * El mensaje que debe mostrar es: "Felicidades (userNAme) Quedas registrado al cupo de la beca"
 * En caso tal que no cumpla los requisitos: "No cumples los requisitos"
 */
//-------------------------------------------------------------------------------------------
/**
 * Challenge #04
 *
 * Ingresar un departamento de estos 4 (Cundinamarca, Quindio, Antioquia, Valle)
 *
 * Si al ingresar un departamento o una palabra que no sean esos 4 departamentos debe mostrar un mensaje de error: alert("opcion no valida")
 *
 * Dependiendo de que departamento ingreso se debe mostrar cual es la capital
 */
//-------------------------------------------------------------------------------------------
/**
 * Challenge #05
 *
 *Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 *Ingresar objetivo de visita (turismo, comidas, museos)
 *Dependiendo de la opcion elegida
 *ejemplo1 (antioquia y comidas)
 *mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
 *ejemplo 2: se ingreso cundinamarca y turismo
 *mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
 *alert("opcion no valida") en caso que no se ingrese alguna de las opciones
 */

//****************************************************************************** */

// solucion challenge #03
function challengeThree() {
  const userName = prompt("Ingrese su nombre").toLowerCase();
  const age = prompt("Ingrese edad");
  const country = prompt("Ingrese pais").toLowerCase();
  const leftOrRigh = prompt(
    "Ingrese si eres una persona que usa la mano izquierda o derecha"
  ).toLocaleLowerCase();

  if (age >= 18 && country === "colombia" && leftOrRigh === "izquierda") {
    alert("Felicidades " + userName + " Quedas registrado al cupo de la beca");
  } else {
    alert("No cumples los requisitos");
  }
}
//--------------------------------------------------------------------------
// Solucion challenge #04
function challengeFour() {
  const department = prompt(
    "Ingrese departamento (Cundinamarca, Quindio, Antioquia, Valle)"
  ).toLowerCase();
  if (
    department !== "cundinamarca" &&
    department !== "quindio" &&
    department !== "antioquia" &&
    department !== "valle"
  ) {
    alert(
      "Ingresaste algo diferente a los 4 departamentos requeridos (Cundinamarca, Quindio, Antioquia, Valle)"
    );
  } else {
    if (department === "cundinamarca") {
      alert("La capital es Bogotá");
    } else {
      if (department === "quindio") {
        alert("La capital es Armenia");
      } else {
        if (department === "antioquia") {
          alert("La capital es Medellin");
        } else {
          if (department === "valle") {
            alert("La capital es Cali");
          }
        }
      }
    }
  }
}
//--------------------------------------------------------------------------
// solucion challenge #05
function challengeFive() {
  // Pedir al usuario que ingrese el departamento y el objetivo de visita
  let department = prompt(
    "Ingrese un departamento (Cundinamarca, Quindio, Antioquia, Valle):"
  );
  let reasonOfVisit = prompt(
    "Ingrese el objetivo de visita (turismo, comidas, museos):"
  );
  // Validar datos nulos o vacios
  if (
    department === "" ||
    department === null ||
    reasonOfVisit === "" ||
    reasonOfVisit === null
  ) {
    alert("Por favor, ingrese valores válidos para departamento y objetivo.");
  } else {
    // Convertir el texto ingresado a minúsculas para evitar problemas de mayúsculas/minúsculas
    department = department.toLowerCase();
    reasonOfVisit = reasonOfVisit.toLowerCase();

    // Evaluar las opciones ingresadas
    if (department === "antioquia") {
      if (reasonOfVisit === "comidas") {
        alert(
          "Las comidas más populares en Antioquia son la bandeja paisa, arepa rellena, etc."
        );
      } else if (reasonOfVisit === "turismo") {
        alert(
          "Lugares para visitar en Antioquia son el Parque Arví, Guatapé, etc."
        );
      } else if (reasonOfVisit === "museos") {
        alert(
          "Algunos museos interesantes en Antioquia son el Museo de Antioquia, Museo El Castillo, etc."
        );
      } else {
        alert("Opción de objetivo no válida para Antioquia.");
      }
    } else if (department === "cundinamarca") {
      if (reasonOfVisit === "comidas") {
        alert(
          "Prueba la deliciosa lechona tolimense y otros platillos en Cundinamarca."
        );
      } else if (reasonOfVisit === "turismo") {
        alert(
          "Lugares para visitar en Cundinamarca son Monserrate, La Candelaria, etc."
        );
      } else if (reasonOfVisit === "museos") {
        alert(
          "Explora museos como el Museo del Oro en Bogotá y otros en Cundinamarca."
        );
      } else {
        alert("Opción de objetivo no válida para Cundinamarca.");
      }
    } else if (department === "quindio") {
      if (reasonOfVisit === "comidas") {
        alert(
          "El Quindío es conocido por su café y aguas termales, entre otras delicias culinarias."
        );
      } else if (reasonOfVisit === "turismo") {
        alert(
          "Descubre el hermoso Paisaje Cultural Cafetero y el Parque Nacional del Café en el Quindío."
        );
      } else if (reasonOfVisit === "museos") {
        alert(
          "Visita el Museo del Oro Quimbaya y otros sitios culturales en el Quindío."
        );
      } else {
        alert("Opción de objetivo no válida para el Quindío.");
      }
    } else if (department === "valle") {
      if (reasonOfVisit === "comidas") {
        alert(
          "En el Valle del Cauca puedes disfrutar de la sancocho de gallina, champús, entre otros."
        );
      } else if (reasonOfVisit === "turismo") {
        alert(
          "Explora la belleza natural del Valle del Cauca, como el Parque Nacional Natural Farallones de Cali."
        );
      } else if (reasonOfVisit === "museos") {
        alert(
          "Conoce el Museo La Tertulia y otros lugares culturales en el Valle del Cauca."
        );
      } else {
        alert("Opción de objetivo no válida para el Valle del Cauca.");
      }
    } else {
      alert("Departamento no válido.");
    }
  }
}
