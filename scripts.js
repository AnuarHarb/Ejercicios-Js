// // Ejemplo de tipo de datos
// // var apellido = "Cano";
// // var nombre_completo = nombre + " " + apellido;
// //
// // var edad = 2018 - 1980; // Number
// // var casado = true; //Boolean
// //
// // console.log("mi nombre es " + nombre);
// // console.log(nombre_completo);
// // console.log(edad);
// // console.log(casado);
//
//
// // Horas de sueño
// let dormir = Number(prompt("A que hora dormiste"));
// let despertar = Number(prompt("A que hora despertaste"));
//
// if(dormir <= 12) {
//   var horas_dormidas = despertar + (12-dormir);
// } else {
//   var horas_dormidas = despertar + (24-dormir);
// }
// console.log(horas_dormidas);
//
// //Ciclos - Regaño
// for(let contador = 0; contador <= 100; contador+=5) {
//   console.log(contador);
// }
// // ------
// // Saludo
// var nombre = "Olaf"; //String
// console.log(nombre);
//
// if(nombre == "Anuar") {
//   console.log("Hola anuar");
// } else if(nombre == "AlexisDoli") {
//   console.log("Hola AlexisDoli")
// } else {
//   console.log("Tu no eres Anuar ni AlexisDoli");
// }
//



// Declarando la funcion
function horasDeSueño() {
  let dormir = Number(prompt("A que hora dormiste"));
  let despertar = Number(prompt("A que hora despertaste"));

  if(dormir <= 12) {
    var horas_dormidas = despertar + (12-dormir);
  } else {
    var horas_dormidas = despertar + (24-dormir);
  }
  console.log(horas_dormidas);
}

// Ejecutar la funcion
horasDeSueño();








// h
