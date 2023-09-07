

function mostrar(valor){
    document.getElementById("salida").value += valor;


}



function reiniciar(){
    document.getElementById('salida').value = '';

}

function calcular(){
    let valor = document.getElementById("salida").value;
    resultado = eval(valor);

    document.getElementById("salida").value = resultado;

}


document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const nombreInput = document.getElementById("nombreInput");
    const aceptarBtn = document.getElementById("aceptarBtn");
    const nombreMostrado = document.getElementById("nombreMostrado");

    // Mostrar el pop-up automáticamente al cargar la página
    popup.style.display = "block";

    aceptarBtn.addEventListener("click", function () {
        const nombre = nombreInput.value;
        nombreMostrado.textContent = `Hola, ${nombre}!`;
        nombreMostrado.style.display = "block";
        popup.style.display = "none";
    });
});


