// Función para mostrar u ocultar la teoría
function toggleTeoria(teoriaId) {
    const contenido = document.getElementById(`teoria-${teoriaId}`);
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
}

// Función para mostrar u ocultar la teoría
function toggleTeoria(teoriaId) {
    const contenido = document.getElementById(`teoria-${teoriaId}`);
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
}

let palabrasUnidas = {}; // Asegúrate de que esta variable esté definida globalmente

// Almacenar el texto original de las definiciones
const definicionesOriginales = {
    "Rojo": "Red",   
    "Azul": "Blue",    
    "Amarillo": "Yellow", 
    "Verde": "Green",    
    "Naranja": "Orange"
};

// Arrastrar y soltar en Juego 1
function startDrag(event) {
    event.dataTransfer.setData("text", event.target.innerText); // Guarda la palabra actual (en español)
}

function allowDrop(event) {
    event.preventDefault(); // Permitir el drop
}

function drop(event) {
    event.preventDefault();
    const palabra = event.dataTransfer.getData("text"); // Obtener la palabra arrastrada
    
    // Cambiar el texto en la definición
    event.target.innerText = palabra; 
    
    // Guardar la unión usando la palabra en español como valor y la palabra en inglés (data-correct) como clave
    const definicionCorrecta = event.target.getAttribute('data-correct'); 
    palabrasUnidas[definicionCorrecta] = palabra; 

    // Desactivar la palabra en la columna izquierda
    document.querySelectorAll('.columna-izquierda .palabra').forEach(p => {
        if (p.innerText === palabra) {
            p.setAttribute('draggable', 'false'); // Deshabilitar el arrastre
            p.style.opacity = "0.5"; // Cambiar la opacidad para que sea menos visible
        }
    });
}

function comprobarJuego1() {
    let respuestasCorrectas = 0;
    const totalRespuestas = Object.keys(definicionesOriginales).length; // Número total de definiciones

    // Verificar las respuestas
    for (const [palabraEspañol, palabraIngles] of Object.entries(definicionesOriginales)) {
        // Comparar si la palabra en español corresponde a la palabra en inglés en el área de drop
        if (palabrasUnidas[palabraIngles] && palabrasUnidas[palabraIngles].trim().toLowerCase() === palabraEspañol.trim().toLowerCase()) {
            respuestasCorrectas++; // Incrementar si la respuesta es correcta
        }
    }

    // Mensaje de resultados
    if (respuestasCorrectas === totalRespuestas) {
        alert("¡Todas las respuestas son correctas!");
    } else {
        alert(`Algunas respuestas son incorrectas. Tienes ${respuestasCorrectas} de ${totalRespuestas} correctas.`);
    }

    // Reiniciar el juego
    reiniciarJuego();
}

function reiniciarJuego() {
    palabrasUnidas = {}; // Limpiar las uniones

    // Restablecer los textos de las definiciones
    document.querySelectorAll('.columna-derecha p').forEach(p => {
        p.innerText = p.getAttribute('data-correct'); // Restaurar texto original de la definición
    });

    // Restablecer los textos y estilos de las palabras en la columna izquierda
    document.querySelectorAll('.columna-izquierda .palabra').forEach(p => {
        p.setAttribute('draggable', 'true'); // Asegurarse de que sean arrastrables de nuevo
        p.style.opacity = "1"; // Restaurar la opacidad original
    });
}


// Juego 2: Completar texto
function dropWord(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.innerText = data; // Coloca la palabra en el espacio vacío
}

function comprobarJuego2() {
    const vacios = document.querySelectorAll('.vacío');
    let respuestaCorrecta = true;

    const respuestasCorrectas = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    vacios.forEach((vacio, index) => {
        if (vacio.innerText !== respuestasCorrectas[index]) {
            respuestaCorrecta = false;
        }
    });

    if (respuestaCorrecta) {
        alert("¡Todos los espacios están llenos correctamente!");
    } else {
        alert("Aún hay palabras incorrectas o espacios vacíos.");
    }

    // Reiniciar el juego
    reiniciarJuego2();
}

function reiniciarJuego2() {
    const vacios = document.querySelectorAll('.vacío');
    
    vacios.forEach(vacio => {
        vacio.innerText = ""; // Limpiar el texto de los espacios vacíos
    });

    // Opcional: Si deseas que las palabras también vuelvan a su lugar original, puedes implementar esa lógica aquí.
}

