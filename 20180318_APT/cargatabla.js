
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
