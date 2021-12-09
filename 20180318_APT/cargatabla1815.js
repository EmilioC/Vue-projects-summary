
var tabla = [
    {nombre: "Real ", puntos: 45},
    {nombre: "Betis", puntos: 33},
    {nombre: "Oviedo", puntos: 33},
    {nombre: "Carcabuye", puntos: 33}  

];

var tabla1 = [
    {nombre: "Real ", puntos: 45, nAPT :"1",
    nombre: "Real ", puntos: 45, nAPT :"1",
    nombre: "Real ", puntos: 45, nAPT :"1",
    nombre: "Real ", puntos: 45, nAPT :"1",
    nombre: "Real ", puntos: 45, nAPT :"1",
    nombre: "Real ", puntos: 45, nAPT :"1"
 },
    {nombre: "Betis", puntos: 33, nAPT :"1 nuevo aperitivo" },
    {nombre: "Oviedo", puntos: 33, nAPT :"1"},
    {nombre: "Carcabuye", puntos: 33, nAPT :"1"},
    {nombre: "Real ", puntos: 45, nAPT :"1"},
    {nombre: "Betis", puntos: 33, nAPT :"1"},
    {nombre: "Oviedo", puntos: 33, nAPT :"1"},
    {nombre: "Carcabuye", puntos: 33, nAPT :"1"}

];


var jsonAPT =[
    {nAPT:"1", 
    idInitiator:1111,
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
    idInitiator:2222,
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
    idInitiator:333,
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

        for (var i = 0; i< jsonAPT.length; i++){
            tablaLlena += 
            "<tr><td>"+ jsonAPT[i].idInitiator + 
            "</td><td>"+ jsonAPT[i].dateAPT +  
            "</td><tr>";
        }
        
    cuerpoTabla.innerHTML =  tablaLlena;
    }

function nuevoEquipo(event){

    //Bloqueamos para continuar en la misma página
    event.preventDefault();
    
    var equipoIntroducidoPorUsuario = document.getElementById("equipo").value;
    var puntosIntroducidoPorUsuario = document.getElementById("puntos").value;
  
    var nuevoEquipo = {
        nombre: equipoIntroducidoPorUsuario , 
        puntos: puntosIntroducidoPorUsuario,
    };
    //añadir elemento a array con push
    jsonAPT.push(nuevoEquipo);
    
}
}

