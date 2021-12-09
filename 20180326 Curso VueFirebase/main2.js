// Vanilla JavaScript

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
        message: 'hola que tal ',
        message2: '¡Vue.js!',

        methods: {
            reverseMessage: function () {
              this.message = this.message.split('').reverse().join(''),
              document.getElementById ('p1')=parrafo1,
              parrafo1.sytle.backgroudColor = "#ff0000"
            },

            viewOfApt: function(){
               

            }
          },
        
        persona:{
            nombre:'Juan',
            profesion:'dev',
            ciudad: 'Valencia',
        },
       apt: [
            {nAPT: '1',
            idInitiator: 'Max',
            idSupervisor:'JARomero',
            dateAPT:'17/03/2018',
            areaAPT:'Bordas',
            descriptionAPT:'Cuadro eléctrico con cerradura rota',
            actionAPT:'Reparación cerradura',
            typeAP:'Condicion',
            category:'Riesgo eléctrico',
            photoAPT:'Foto 1',
            learningAPT:'Humedad provoca derivación eléctrica',
            causes:'Deterioro material',
            },
            {nAPT: '2',
            idInitiator: 'Max',
            idSupervisor:'JARomero',
            dateAPT:'17/03/2018',
            areaAPT:'Bordas',
            descriptionAPT:'Cuadro eléctrico con cerradura rota',
            actionAPT:'Reparación cerradura',
            typeAP:'Condicion',
            category:'Riesgo eléctrico',
            photoAPT:'Foto 1',
            learningAPT:'Humedad provoca derivación eléctrica',
            causes:'Deterioro material',
            },
            {nAPT: '3',
            idInitiator: 'Max',
            idSupervisor:'JARomero',
            dateAPT:'17/03/2018',
            areaAPT:'Bordas',
            descriptionAPT:'Cuadro eléctrico con cerradura rota',
            actionAPT:'Reparación cerradura',
            typeAP:'Condicion',
            category:'Riesgo eléctrico',
            photoAPT:'Foto 1',
            learningAPT:'Humedad provoca derivación eléctrica',
            causes:'Deterioro material',
            },
            {nAPT: '4',
            idInitiator: 'Max',
            idSupervisor:'JARomero',
            dateAPT:'17/03/2018',
            areaAPT:'Bordas',
            descriptionAPT:'Cuadro eléctrico con cerradura rota',
            actionAPT:'Reparación cerradura',
            typeAP:'Condicion',
            category:'Riesgo eléctrico',
            photoAPT:'Foto 1',
            learningAPT:'Humedad provoca derivación eléctrica',
            causes:'Deterioro material',
            },],
        }
    })
    var app5 = new Vue({
        el: '#app-5',
        data: {
          message: 'APRENDIENDO '
        },
        methods: {
          reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
          }
        }
      })




