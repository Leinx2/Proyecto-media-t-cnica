// Código del juego del Cuadro de Pitágoras
function validarCuadro() {
    var correcto = true;
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            var input = document.getElementById(`cell-${i}-${j}`).value;
            if (input != i * j) {
                correcto = false;
                document.getElementById(`cell-${i}-${j}`).style.backgroundColor = 'red';
            } else {
                document.getElementById(`cell-${i}-${j}`).style.backgroundColor = 'green';
            }
        }
    }
    if (correcto) {
        alert("¡Todas las respuestas son correctas!");
    } else {
        alert("Algunas respuestas son incorrectas.");
    }
}

// Código del juego de Mayor o Menor
let num1, num2;

function generarNumeros() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    document.getElementById('numero1').textContent = num1;
    document.getElementById('numero2').textContent = num2;
}

function comprobar(opcion) {
    let resultado;
    if (opcion === 'mayor' && num1 > num2) resultado = true;
    else if (opcion === 'menor' && num1 < num2) resultado = true;
    else if (opcion === 'igual' && num1 === num2) resultado = true;
    else resultado = false;

    if (resultado) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto.");
    }

    generarNumeros(); // Genera nuevos números para continuar el juego
}

generarNumeros(); // Inicializa los números al cargar la página
