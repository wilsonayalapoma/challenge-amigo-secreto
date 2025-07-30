// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    // Agregar el nombre al array
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpiar la lista
    
    // Crear un elemento li por cada amigo
    listaAmigos.forEach((amigo, index) => {
        const elementoAmigo = document.createElement('li');
        elementoAmigo.textContent = amigo;
        
        // Agregar botón para eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '×';
        botonEliminar.classList.add('button-delete');
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        elementoAmigo.appendChild(botonEliminar);
        listaHTML.appendChild(elementoAmigo);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert('Por favor, agrega al menos un amigo para sortear');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}

// Permitir agregar amigos con la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});