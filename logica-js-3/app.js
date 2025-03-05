let continuar = "ok";
let area = "";
let framework  = "";
let lenguaje = "";
while (area != "Front" && area != "Back" ) {
    area = prompt("¿Querés seguir hacia el área de Front-End o Back-End? (Front/Back)");
    if (area ==  "Front") {
        while (framework != "React" && framework != "Vue") {
            framework = prompt("¿Querés aprender React o Vue? (React/Vue)");
            if (framework == "React" || framework == "Vue"){
                alert(`Elegiste seguir el área ${area} y aprender el framework ${framework}`);
            }
            else  {
                alert("No escribiste un framework válido");
            }
        }
    }
    else if (area == "Back") {
        while (lenguaje != "C#" && lenguaje != "Java") {
            lenguaje = prompt("¿Querés aprender C# o Java? (C#/Java)");
            if (lenguaje == "C#" || lenguaje == "Java") {
                alert(`Elegiste seguir el área ${area} y aprender el lenguaje ${lenguaje}`);
            }
            else {
                alert("No escribiste un lenguaje válido");
            }
        }
    }
    else {
        alert("No escribiste un área válida");
    }
}

const especializacion = prompt("¿Querés seguir especializándote en el área elegida o desarollándote para convertirte en Fullstack? (Especialización/Fullstack)");

while (continuar == "ok") {
    let tecnologia = prompt("En qué tecnologías te gustaría especializarte");
    alert(`Elegiste especializarte en la tecnología ${tecnologia}`);
    continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? 'ok' en caso positivo.");
}