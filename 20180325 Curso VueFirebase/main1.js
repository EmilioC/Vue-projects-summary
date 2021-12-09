// Vanilla JavaScript
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');
// input.addEventListener('keyup', () => h1.innerHTML = input.value);

// Renderizar listas cuando el modelo es 
// un objeto o una matriz


const vm = new Vue({
    el: 'main',
    data:  {
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],  
        nombre: 'Juan',
        edad: 'Rápido',
    },
});




