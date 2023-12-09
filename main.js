/* //Funcion para ingreso en el ecommerce 
let nombre =prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");

if (nombre != "" && (nombre === "admin") && contraseña != "" && (contraseña === "123456")) {
  alert ("Ahora ingrese una pregunta de seguridad")
} 

let pregunta = prompt("Ingrese la pregunta de seguridad");

if (pregunta != "" && (pregunta === "hola")) {
    alert ("Ahora ingrese su edad")
  } 

else { 
  alert("Datos incorrectos");
}

let edad = Number(prompt("Ingrese su edad"));

if (edad < 14) {
  alert("No puedes entrar, no eres el profesor");
} else if (edad > 18) {
  alert("Puedes entrar, eres el profesor");
} else if (edad > 55) {
  alert("No puedes eres muy mayor");
}
*/

function usuario(saludo, nombre) {
    return prompt(pregunta).toLocaleLowerCase();
    
}
let nombre =prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");

if (nombre != "" && (nombre === "admin") && contraseña != "" && (contraseña === "123456")) {
  alert ("Ahora ingrese una pregunta de seguridad")
} 

let pregunta = prompt("Ingrese la pregunta de seguridad");

if (pregunta != "" && (pregunta === "soy el profesor")) {
    alert ("Ahora ingrese su edad")
  } 

else { 
  alert("Datos incorrectos");
}

let edad = Number(prompt("Ingrese su edad"));

if (edad < 14) {
  alert("No puedes entrar, no eres el profesor");
} else if (edad > 18) {
  alert("Puedes entrar, eres el profesor");
} else if (edad > 55) {
  alert("No puedes eres muy mayor");
}

