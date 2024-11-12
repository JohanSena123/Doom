
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("miLista");
const input = document.getElementById("tareaInput");
boton.addEventListener("click", () => {
    const textoTarea = input.value;
    if (textoTarea.trim() !== "") {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = textoTarea;
        lista.appendChild(nuevoElemento);
        input.value = "";
    } else {
        alert("Por favor, escribe una tarea.");
    }
});