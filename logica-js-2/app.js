const nombre = prompt("¿Cuál es tu nombre?:");

const edad = parseInt(prompt("¿Cuántos años tienes?:"));

const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?:");

const msg1 = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;

let respuesta = 0;

let msg2;

alert(msg1);

while (respuesta != 1 && respuesta != 2) {
    respuesta = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`));
    if (respuesta != 1 && respuesta != 2) {
        alert("Respuesta inválida");
    }
}

if (respuesta == 1) {
    msg2 = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
} else {
    msg2 = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
}

alert(msg2);