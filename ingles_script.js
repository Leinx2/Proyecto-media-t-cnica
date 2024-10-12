
function toggleTeoria(teoriaId) {
    const contenido = document.getElementById(`teoria-${teoriaId}`);
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
}


function toggleTeoria(teoriaId) {
    const contenido = document.getElementById(`teoria-${teoriaId}`);
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
}

let palabrasUnidas = {}; 


const definicionesOriginales = {
    "Rojo": "Red",   
    "Azul": "Blue",    
    "Amarillo": "Yellow", 
    "Verde": "Green",    
    "Naranja": "Orange"
};


function startDrag(event) {
    event.dataTransfer.setData("text", event.target.innerText); 
}

function allowDrop(event) {
    event.preventDefault(); 
}

function drop(event) {
    event.preventDefault();
    const palabra = event.dataTransfer.getData("text"); 
    
    event.target.innerText = palabra; 
    
    const definicionCorrecta = event.target.getAttribute('data-correct'); 
    palabrasUnidas[definicionCorrecta] = palabra; 

    document.querySelectorAll('.columna-izquierda .palabra').forEach(p => {
        if (p.innerText === palabra) {
            p.setAttribute('draggable', 'false'); 
            p.style.opacity = "0.5"; 
        }
    });
}

function comprobarJuego1() {
    let respuestasCorrectas = 0;
    const totalRespuestas = Object.keys(definicionesOriginales).length; 


    for (const [palabraEspañol, palabraIngles] of Object.entries(definicionesOriginales)) {

        if (palabrasUnidas[palabraIngles] && palabrasUnidas[palabraIngles].trim().toLowerCase() === palabraEspañol.trim().toLowerCase()) {
            respuestasCorrectas++; 
        }
    }


    if (respuestasCorrectas === totalRespuestas) {
        alert("¡Todas las respuestas son correctas!");
    } else {
        alert(`Algunas respuestas son incorrectas. Tienes ${respuestasCorrectas} de ${totalRespuestas} correctas.`);
    }


    reiniciarJuego();
}

function reiniciarJuego() {
    palabrasUnidas = {};


    document.querySelectorAll('.columna-derecha p').forEach(p => {
        p.innerText = p.getAttribute('data-correct'); 
    });


    document.querySelectorAll('.columna-izquierda .palabra').forEach(p => {
        p.setAttribute('draggable', 'true'); 
        p.style.opacity = "1";
    });
}


function dropWord(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.innerText = data; 
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

    reiniciarJuego2();
}

function reiniciarJuego2() {
    const vacios = document.querySelectorAll('.vacío');
    
    vacios.forEach(vacio => {
        vacio.innerText = ""; 
    });

}

