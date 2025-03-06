const numeroSecreto = Math.floor(Math.random() * 11);
const intentos = 3;
let intento;
let acierto = false;

for(let contador = 0; contador < intentos; contador++){ 
    intento = -1;
    while (intento < 0 || intento > 10){
        intento = parseInt(prompt("Intenta descubrir el número entre 0 y 10:"));
        if (intento < 0 || intento > 10) {
            alert("No escribiste un número válido");
        }
    }
    if(intento === numeroSecreto){
        alert(`¡Felicidades, acertaste! El número era ${numeroSecreto}.`);
        acierto = true;
        break;
    }
    alert(`¡Incorrecto! Te quedan ${intentos - contador - 1} intentos`);
}
if(!acierto){
    alert(`No acertaste. El número era ${numeroSecreto}`);
}