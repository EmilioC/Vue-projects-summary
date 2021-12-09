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
        tareas: [
            {nombre:'Levantarse', prioridad:'baja'},
            {nombre:'Desayunar', prioridad:'alta'},
            {nombre:'Ir al trabajo', prioridad:'alta'},
        ],
        
        persona:{
            nombre:'Juan',
            profesion:'dev',
            ciudad: 'Valencia',
        },
       apt: [
            {nAPT: "1",
            idInitiator: "Max",
            idSupervisor:"JARomero",
            dateAPT:"17/03/2018",
            areaAPT:"Bordas",
            descriptionAPT:"Cuadro eléctrico con cerradura rota",
            actionAPT:"Reparación cerradura",
            typeAP:"Condicion",
            category:"Riesgo eléctrico",
            photoAPT:"Foto 1",
            learningAPT:"Humedad provoca derivación eléctrica",
            causes:"Deterioro material"
            },]
        }
    })




