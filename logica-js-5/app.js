let listaDeCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    otros: [],
  };
  
const alimentoInput = document.getElementById("alimento");
const categoriaSelect = document.getElementById("categoria");
const agregarButton = document.getElementById("agregar");

agregarButton.addEventListener("click", () => {
    const alimento = alimentoInput.value.trim();
    const categoria = categoriaSelect.value;

    if (alimento) {
        listaDeCompras[categoria].push(alimento);
        actualizarLista();
        alimentoInput.value = "";
        let agregarMas = "";
        while (agregarMas.toLowerCase() !== "si" && agregarMas.toLowerCase() !== "no") {
            agregarMas = prompt("¿Deseas agregar otro alimento? (si/no)");
                if (agregarMas.toLowerCase() !== "si" && agregarMas.toLowerCase() !== "no") {
                    alert("Por favor, ingresa 'si' o 'no'.");
                }
            }

            if (agregarMas.toLowerCase() === "no") {
            agregarButton.disabled = true;
        }
    } else {
        alert("Por favor, ingresa el nombre del alimento.");
    }
});
  
function actualizarLista() {
    for (let categoria in listaDeCompras) {
        const listaUl = document.getElementById(categoria);
        if (listaUl) {
            listaUl.innerHTML = "";
        
            listaDeCompras[categoria].forEach((alimento) => {
                const li = document.createElement("li");
                li.textContent = alimento;
                listaUl.appendChild(li);
            });
        } else {
            const nuevaListaUl = document.createElement("ul");
            nuevaListaUl.id = categoria;
            const listaDiv = document.getElementById("lista");
            listaDiv.appendChild(nuevaListaUl);
            actualizarLista();
            return;
        }

    }
}
