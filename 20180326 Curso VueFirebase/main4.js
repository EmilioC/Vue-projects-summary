// Vanilla JavaScript

// Renderizar listas cuando el modelo es 
// un objeto o una matriz

//Crear tabla con JavaScript

window.onload =cargarEventos;

function cargarEventos (){

    //Cójeme de la página aquel elemento cuyo id es mostrar-tabla
    //añadimos la acción al elementos el escuchador de eventos
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    
    // Mostrar un partido en la tabla
    function mostrarTabla(){

        var cuerpoTabla = document.getElementById("equipos-tabla");
        var tablaLlena ="";

        for (var i = 0; i< apt.length; i++){
            tablaLlena += 
            "<tr><td>"+ apt[i].idInitiator + 
            "</td><td>"+ apt[i].dateAPT +  
            "</td><td>"+ apt[i].learningAPT + 
            "</td><tr>";
        }        
    cuerpoTabla.innerHTML =  tablaLlena;
    }
}

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
            
            mostrarTabla1: function () {
                
                var cuerpoTabla = document.getElementById("equipos-tabla1");
                var tablaLlena ="";
            
                for (var i = 0; i< apt.length; i++){
            
                    if ( apt[i].idInitiator =="Max"){
                    tablaLlena += 
                    "<tr><td>"+ apt[i].idInitiator + 
                    "</td><td>"+ apt[i].dateAPT +  
                    "</td><td>"+ apt[i].learningAPT + 
                    "</td><tr>";
                    }
                } 
              
            },

            viewOfApt: function(){
               

            }
          },
        
        persona:{
            nombre:'Juan',
            profesion:'Vue.js',
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
            dateAPT:'21/03/2018',
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
            dateAPT:'26/03/2018',
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
            dateAPT:'29/03/2018',
            areaAPT:'Bordas',
            descriptionAPT:'Cuadro eléctrico con cerradura rota',
            actionAPT:'Reparación cerradura',
            typeAP:'Condicion',
            category:'Riesgo eléctrico',
            photoAPT:'Foto 1',
            learningAPT:'Humedad provoca derivación eléctrica',
            causes:'Deterioro material',
            },
            {nAPT: '5',
            idInitiator: 'Max',
            idSupervisor:'JARomero',
            dateAPT:'01/04/2018',
            areaAPT:'Bordas',
            descriptionAPT:'Cuadro eléctrico con cerradura rota',
            actionAPT:'Reparación cerradura',
            typeAP:'Condicion',
            category:'Riesgo eléctrico',
            photoAPT:'Foto 1',
            learningAPT:'Humedad provoca derivación eléctrica',
            causes:'Deterioro material',
            },
            {nAPT: '6',
            idInitiator: 'Max',
            idSupervisor:'JARomero',
            dateAPT:'01/04/2018',
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

      var apt = [
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
        dateAPT:'21/03/2018',
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
        dateAPT:'26/03/2018',
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
        dateAPT:'29/03/2018',
        areaAPT:'Bordas',
        descriptionAPT:'Cuadro eléctrico con cerradura rota',
        actionAPT:'Reparación cerradura',
        typeAP:'Condicion',
        category:'Riesgo eléctrico',
        photoAPT:'Foto 1',
        learningAPT:'Humedad provoca derivación eléctrica',
        causes:'Deterioro material',
        },
        {nAPT: '5',
        idInitiator: 'Max',
        idSupervisor:'JARomero',
        dateAPT:'01/04/2018',
        areaAPT:'Bordas',
        descriptionAPT:'Cuadro eléctrico con cerradura rota',
        actionAPT:'Reparación cerradura',
        typeAP:'Condicion',
        category:'Riesgo eléctrico',
        photoAPT:'Foto 1',
        learningAPT:'Humedad provoca derivación eléctrica',
        causes:'Deterioro material',
        },
        {nAPT: '6',
        idInitiator: 'Max',
        idSupervisor:'JARomero',
        dateAPT:'01/04/2018',
        areaAPT:'Bordas',
        descriptionAPT:'Cuadro eléctrico con cerradura rota',
        actionAPT:'Reparación cerradura',
        typeAP:'Condicion',
        category:'Riesgo eléctrico',
        photoAPT:'Foto 1',
        learningAPT:'Humedad provoca derivación eléctrica',
        causes:'Deterioro material',
        }];




