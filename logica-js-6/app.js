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

function actualizarCategorias() {
    categoriaSelect.innerHTML = ""; // Limpiar las opciones actuales
  
    for (let categoria in listaDeCompras) {
      const option = document.createElement("option");
      option.value = categoria;
      option.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
      categoriaSelect.appendChild(option);
    }
  
    const nuevaCategoriaOption = document.createElement("option");
    nuevaCategoriaOption.value = "nueva";
    nuevaCategoriaOption.textContent = "Nueva categoría...";
    categoriaSelect.appendChild(nuevaCategoriaOption);
  }
  
  actualizarCategorias();

agregarButton.addEventListener("click", () => {
    const alimento = alimentoInput.value.trim();
    let categoria = categoriaSelect.value;

    if (categoria === "nueva") {
        let nuevaCategoria = prompt("Ingresá el nombre de la nueva categoría:");
        if (nuevaCategoria) {
          categoria = nuevaCategoria.toLowerCase();
          listaDeCompras[categoria] = [];
          actualizarCategorias();
          categoriaSelect.value = categoria;
        } else {
          return;
        }
      }

    if (alimento) {
        listaDeCompras[categoria].push(alimento);
        actualizarLista();
        alimentoInput.value = "";
        let agregarMas = "";
        while (agregarMas.toLowerCase() !== "si" && agregarMas.toLowerCase() !== "no" && agregarMas.toLowerCase() !== "eliminar" && agregarMas.toLowerCase() !== "editarcategoria" && agregarMas.toLowerCase() !== "eliminarcategoria") {
            if (Object.values(listaDeCompras).flat().length > 0){
                agregarMas = prompt("¿Deseás agregar otro alimento? (si/no/eliminar/editarCategoria/eliminarCategoria)");
            } else { 
                agregarMas = prompt("¿Deseás agregar otro alimento? (si/no)");
            }
            if (agregarMas.toLowerCase() !== "si" && agregarMas.toLowerCase() !== "no" && agregarMas.toLowerCase() !== "eliminar" && agregarMas.toLowerCase() !== "editarcategoria" && agregarMas.toLowerCase() !== "eliminarcategoria") {
                alert("Por favor, ingresá 'si', 'no', 'eliminar' , 'editarCategoria' o 'eliminarCategoria'.");
            }
        }

        if (agregarMas.toLowerCase() === "no") {
            agregarButton.disabled = true;
        } else if (agregarMas.toLowerCase() === "eliminar") {
            eliminarElemento();
        } else if (agregarMas.toLowerCase() === "editarcategoria"){
            editarCategoria();
        } else if (agregarMas.toLowerCase() === "eliminarcategoria"){
            eliminarCategoria();
        }
    } else {
        alert("Por favor, ingresá el nombre del alimento.");
    }
});
  
function actualizarLista() {
    const listasContainer = document.getElementById('listas-container');
    listasContainer.innerHTML = '';
    for (let categoria in listaDeCompras) {

        const listaUl = document.createElement('ul');
        listaUl.id = categoria;

        const categoriaTitulo = document.createElement('h3');
        categoriaTitulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        listasContainer.appendChild(categoriaTitulo);
        listasContainer.appendChild(listaUl);

        listaDeCompras[categoria].forEach((alimento, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${alimento}</span>
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            `;
            listaUl.appendChild(li);

            li.querySelector('.editar').addEventListener('click', () => {
                const nuevoAlimento = prompt('Editar alimento:', alimento);
                if (nuevoAlimento) {
                    listaDeCompras[categoria][index] = nuevoAlimento;
                    actualizarLista();
                }
            });

            li.querySelector('.eliminar').addEventListener('click', () => {
                listaDeCompras[categoria].splice(index, 1);
                actualizarLista();
            });
        });
    }
}

function eliminarElemento() {
    const elementoAEliminar = prompt("Ingresá el nombre del elemento que deseas eliminar:");
  
    let encontrado = false;
    for (let categoria in listaDeCompras) {
      const index = listaDeCompras[categoria].indexOf(elementoAEliminar);
      if (index !== -1) {
        listaDeCompras[categoria].splice(index, 1);
        encontrado = true;
        actualizarLista();
        alert(`Elemento "${elementoAEliminar}" eliminado.`);
        break;
      }
    }
  
    if (!encontrado) {
      alert("¡No fue posible encontrar el elemento en la lista!");
    }
}

function editarCategoria(){
const categoriaAEditar = prompt("Ingresá el nombre de la categoría que deseas editar:");
if (listaDeCompras.hasOwnProperty(categoriaAEditar)){
    const nuevoNombre = prompt(`Ingresá el nuevo nombre para la categoría ${categoriaAEditar}`);
    if(nuevoNombre){
        listaDeCompras[nuevoNombre] = listaDeCompras[categoriaAEditar];
        delete listaDeCompras[categoriaAEditar];
        actualizarCategorias();
        actualizarLista();
    }
} else {
    alert("No se encontro la categoria");
}
}
  
function eliminarCategoria(){
    const categoriaAEliminar = prompt("Ingresá el nombre de la categoría que deseas eliminar:");
    if (listaDeCompras.hasOwnProperty(categoriaAEliminar)){
        delete listaDeCompras[categoriaAEliminar];
        actualizarCategorias();
        actualizarLista();
    } else {
        alert("No se encontro la categoría");
    }
}