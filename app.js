// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creamos una lista para almacenar los nombres de los amigos.
let amigos = []; 
// Se declara una variable llamada 'amigos' que es una lista (arreglo) vacía. Aquí se guardarán los nombres que agregues.

// /**
//  * Agrega un amigo a la lista.
//  * Valida que el campo de texto no esté vacío y actualiza la lista en pantalla.
//  */
function agregarAmigo() { 
    // Se define una función llamada 'agregarAmigo' que se ejecuta cuando quieres añadir un nombre.

    // Obtenemos el elemento de entrada y la lista de amigos del DOM.
    let amigoInput = document.getElementById('amigo'); 
    // Busca en el HTML el elemento con id 'amigo' (el campo de texto donde escribes el nombre) y lo guarda en la variable 'amigoInput'.

    let lista = document.getElementById('listaAmigos'); 
    // Busca en el HTML el elemento con id 'listaAmigos' (donde se mostrará la lista de nombres) y lo guarda en la variable 'lista'.

    // Obtenemos el nombre del amigo del campo de entrada.
    let nombreAmigo = amigoInput.value.trim(); 
    // Toma el texto que escribiste en el campo de entrada, le quita los espacios al principio y al final, y lo guarda en 'nombreAmigo'.

    // Verificamos si el campo de texto está vacío.
    if (nombreAmigo === '') { 
        // Si no escribiste nada (el campo está vacío)...
        alert('Por favor, ingresa un nombre válido.'); 
        // ...muestra una alerta pidiendo que escribas un nombre válido.
        return; // Detiene la función aquí si el campo está vacío.
    }

    // Agregamos el nombre del amigo a nuestra lista.
    amigos.push(nombreAmigo); 
    // Añade el nombre que escribiste al final de la lista 'amigos'.

    // Actualizamos la lista de amigos que se muestra en la página.
    // Mostramos la lista como elementos <li> dentro de un <ul>
    lista.innerHTML = ''; 
    // Borra todo lo que había en la lista visual antes de actualizarla.

    amigos.forEach(function(amigo) { 
        // Recorre cada nombre guardado en la lista 'amigos'.
        let li = document.createElement('li'); 
        // Crea un nuevo elemento de lista (<li>) para el HTML.
        li.textContent = amigo; 
        // Pone el nombre del amigo dentro del elemento <li>.
        lista.appendChild(li); 
        // Agrega ese <li> a la lista visual en la página.
    });

    // Limpiamos el campo de entrada para el siguiente nombre.
    amigoInput.value = ''; 
    // Borra el texto del campo de entrada para que puedas escribir otro nombre.
}

// /**
//  * Realiza el sorteo del amigo secreto.
//  * Selecciona un nombre al azar de la lista y lo muestra en pantalla.
//  */
function sortearAmigo() { 
    // Se define una función llamada 'sortearAmigo' que se ejecuta cuando quieres hacer el sorteo.

    // Verificamos si hay suficientes amigos para realizar el sorteo.
    if (amigos.length < 2) { 
        // Si hay menos de dos nombres en la lista...
        alert('Agrega al menos dos amigos para poder sortear.'); 
        // ...muestra una alerta diciendo que necesitas al menos dos amigos.
        return; // Detiene la función aquí si no hay suficientes amigos.
    }

    // Generamos un índice aleatorio para seleccionar un amigo.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    // Calcula un número al azar entre 0 y la cantidad de amigos menos uno. Ese número será la posición del amigo sorteado.

    // Obtenemos el nombre del amigo secreto.
    let amigoSecreto = amigos[indiceAleatorio]; 
    // Toma el nombre que está en la posición aleatoria de la lista y lo guarda en 'amigoSecreto'.

    // Mostramos el resultado del sorteo en la página.
    let resultado = document.getElementById('resultado'); 
    // Busca en el HTML el elemento con id 'resultado' (donde se mostrará el nombre sorteado).
    resultado.textContent = 'El amigo secreto es: ' + amigoSecreto; 
    // Muestra el mensaje con el nombre del amigo secreto en la página.
}