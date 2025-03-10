function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

function calculadora() {
    let opcion;
    let num1;
    let num2;
    let resultado;
    
    while (opcion !== 5) {

        opcion = parseInt(prompt("\nOpciones:1. Sumar 2. Restar 3. Multiplicar 4. Dividir 5. Salir\nElige una opción:"));

        if (opcion >= 1 && opcion <= 4) {
            num1 = parseFloat(prompt("Ingresa el primer número:"));
            num2 = parseFloat(prompt("Ingresa el segundo número:"));

            switch (opcion) {
                case 1:
                    resultado = sumar(num1, num2);
                    break;
                case 2:
                    resultado = restar(num1, num2);
                    break;
                case 3:
                    resultado = multiplicar(num1, num2);
                    break;
                case 4:
                    resultado = dividir(num1, num2);
                    break;
            }

            alert(`Resultado:  ${resultado}`);
        } else if (opcion !== 5) {
            alert("Opción inválida.");
        }
    }

    alert("Hasta la próxima.");
}

calculadora();