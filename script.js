// Función para agregar o quitar la clase 'electric-glow' a un elemento
function toggleElectricGlow(element) {
    element.classList.toggle('electric-glow');
}

// Seleccionar el elemento h2 (título)
const titulo = document.querySelector('h1');

// Verificar si el elemento existe antes de intentar agregarle un evento
if (titulo) {
    // Agregar un evento que se ejecuta cada cierto tiempo (ej: 2 segundos)
    setInterval(() => {
        toggleElectricGlow(titulo); // Llamar a la función para agregar/quitar la clase
    }, 2000); // Intervalo de 2000 milisegundos (2 segundos)
}
