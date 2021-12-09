

// Renderizar listas cuando el modelo es 
// Javasript - funciones. 

var input1 = document.getElementById ('input1').value;
var input2 = document.getElementById ('input2').value;

function suma (){
    var suma= input1+input2;
    suma = document.getElementById('demo').innerHTML;

}

//Crear tabla con JavaScript

var tabla = [
    {nombre: "Real ", puntos: 45},
    {nombre: "Betis", puntos: 33},
    {nombre: "Oviedo", puntos: 33},
    {nombre: "Carcabuye", puntos: 33}  

];

var tabla1 = [
    {nidInitiator: "111", 
    dateAPT: "17/03/2018", 
    learningAPT:"Humedad provoca derivación eléctrica"
},
    {nidInitiator: "222", dateAPT: "17/03/2018", learningAPT:"Humedad que quita la sombra"},
    {nidInitiator: "333", dateAPT: "17/03/2018", learningAPT:"Muchísima agua"},
    {nidInitiator: "444", dateAPT: "17/03/2018", learningAPT:"Tremendo"},  

];

var jsonAPT =[
    {nAPT:"1", 
    idInitiator:"1111",
    idSupervisor:"JARomero",
    dateAPT:"17/03/2018",
    areaAPT:"Bordas", 
    descriptionAPT:"Cuadro eléctrico con cerradura rota",
    actionAPT:"Reparación cerradura",
    typeAP:"Condicion",
    category:"Riesgo eléctrico",
    photoAPT:"Foto 1",
    learningAPT:"Humedad provoca derivación eléctrica",
    causes:"Deterioro material"},

    {nAPT:"2", 
    idInitiator:"2222",
    idSupervisor:"JARomero",
    dateAPT:"20/03/2018",
    areaAPT:"Bordas", 
    descriptionAPT:"Cuadro eléctrico con cerradura rota",
    actionAPT:"Reparación cerradura",
    typeAP:"Condicion",
    category:"Riesgo eléctrico",
    photoAPT:"Foto 1",
    learningAPT:"Humedad provoca derivación eléctrica",
    causes:"Deterioro material"},

    {nAPT:"3", 
    idInitiator:"333",
    idSupervisor:"JARomero",
    dateAPT:"22/03/2018",
    areaAPT:"Bordas", 
    descriptionAPT:"Cuadro eléctrico con cerradura rota",
    actionAPT:"Reparación cerradura",
    typeAP:"Condicion",
    category:"Riesgo eléctrico",
    photoAPT:"Foto 1",
    learningAPT:"Humedad es muy húmeda en algunos humedales",
    causes:"Deterioro material"},
    
    {nAPT:"3", 
    idInitiator:"333",
    idSupervisor:"JARomero",
    dateAPT:"22/03/2018",
    areaAPT:"Bordas", 
    descriptionAPT:"Cuadro eléctrico con cerradura rota",
    actionAPT:"Reparación cerradura",
    typeAP:"Condicion",
    category:"Riesgo eléctrico",
    photoAPT:"Foto 1",
    learningAPT:"Humedad es muy húmeda en algunos humedales",
    causes:"Deterioro material"},

    {nAPT:"3", 
    idInitiator:"333",
    idSupervisor:"JARomero",
    dateAPT:"22/03/2018",
    areaAPT:"Bordas", 
    descriptionAPT:"Cuadro eléctrico con cerradura rota",
    actionAPT:"Reparación cerradura",
    typeAP:"Condicion",
    category:"Riesgo eléctrico",
    photoAPT:"Foto 1",
    learningAPT:"Humedad es muy húmeda en algunos humedales",
    causes:"Deterioro material"},

    {nAPT:"3", 
    idInitiator:"333",
    idSupervisor:"JARomero",
    dateAPT:"22/03/2018",
    areaAPT:"Bordas", 
    descriptionAPT:"Cuadro eléctrico con cerradura rota",
    actionAPT:"Reparación cerradura",
    typeAP:"Condicion",
    category:"Riesgo eléctrico",
    photoAPT:"Foto 1",
    learningAPT:"Humedad es muy húmeda en algunos humedales",
    causes:"Deterioro material"},
    ];

window.onload =cargarEventos;

function cargarEventos (){

    //Cójeme de la página aquel elemento cuyo id es mostrar-tabla
    //añadimos la acción al elementos el escuchador de eventos
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("nuevo-equipo").addEventListener("submit", nuevoEquipo, false);
    
    // Mostrar un APT en la tabla
        
    cuerpoTabla.innerHTML =  tablaLlena;

    // Mostrar un partido en la tabla
    function mostrarTabla(){

        var cuerpoTabla = document.getElementById("equipos-tabla");
        var tablaLlena ="";

        for (var i = 0; i< tabla1.length; i++){
            tablaLlena += 
            "<tr><td>"+ tabla1[i].dateAPT + 
            "</td><td>"+ tabla1[i].nidInitiator +  
            "</td><td>"+ tabla1[i].learningAPT + 
            "</td><tr>";
        }
        
    cuerpoTabla.innerHTML =  tablaLlena;
    }

function nuevoEquipo(event){

    //Bloqueamos para continuar en la misma página
    event.preventDefault();
    
    var equipoIntroducidoPorUsuario = document.getElementById("equipo").value;
    var IntroducidoPorUsuario = document.getElementById("puntos").value;
    var aprendizaje = document.getElementById("aprendizaje").value;
  
    var nuevoEquipo = {
        dateAPT: equipoIntroducidoPorUsuario , 
        nidInitiator: equipoIntroducidoPorUsuario,
        learningAPT: aprendizaje,
    };
    //añadir elemento a array con push
    tabla1.push(nuevoEquipo);
    
}

function mostrarTabla(){

    var cuerpoTabla = document.getElementById("equipos-tabla");
    var tablaLlena ="";

    for (var i = 0; i< tabla1.length; i++){
        tablaLlena += 
        "<tr><td>"+ tabla1[i].dateAPT + 
        "</td><td>"+ tabla1[i].nidInitiator +  
        "</td><td>"+ tabla1[i].learningAPT + 
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