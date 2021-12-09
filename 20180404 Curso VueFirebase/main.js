


window.onload =cargarEventos;

function cargarEventos (){

    //Cójeme de la página aquel elemento cuyo id es mostrar-tabla
    //añadimos la acción al elementos el escuchador de eventos
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("nuevo-equipo").addEventListener("submit", nuevoEquipo, false);
    document.getElementById("mostrar-tabla1").addEventListener("click", mostrarTabla1, false);
    
    // Mostrar un APT en la tabla

    // Mostrar un partido en la tabla
    function mostrarTabla(){

        var cuerpoTabla = document.getElementById("equipos-tabla");
        var tablaLlena ="";

        for (var i = 0; i< tabla1.length; i++){
            tablaLlena += 
            "<tr><td>"+ tabla1[i].idInitiator + 
            "</td><td>"+ tabla1[i].dateAPT +  
            "</td><td>"+ tabla1[i].learningAPT + 
            "</td><tr>";
        }
        
    cuerpoTabla.innerHTML =  tablaLlena;
    }

function nuevoEquipo(event){

    //Bloqueamos para continuar en la misma página
    event.preventDefault();
    
    var newid = document.getElementById("id").value;
    var newdate = document.getElementById("fecha").value;
    var newaprendizaje = document.getElementById("aprendizaje").value;
  
    var nuevoEquipo = {
        nAPT: "",
        idInitiator: newid,
        idSupervisor:"",
        dateAPT:newdate,
        areaAPT:"",
        descriptionAPT:"",
        actionAPT:"",
        typeAP:"",
        category:"",
        photoAPT:"",
        learningAPT:newaprendizaje,
        causes:""
    };
    //añadir elemento a array con push
    tabla1.push(nuevoEquipo);
    
}

function mostrarTabla1(){

    var cuerpoTabla = document.getElementById("equipos-tabla1");
    var tablaLlena ="";

    for (var i = 0; i< tabla1.length; i++){

        if ( tabla1[i].idInitiator =="Max"){
        tablaLlena += 
        "<tr><td>"+ tabla1[i].idInitiator + 
        "</td><td>"+ tabla1[i].dateAPT +  
        "</td><td>"+ tabla1[i].learningAPT + 
        "</td><tr>";
        }
    } 
    
cuerpoTabla.innerHTML =  tablaLlena;
}

}

var tabla1 = [
    
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
  },

  {  nAPT: "2",
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
  },
     {nAPT: "3",
     idInitiator: "Marcos",
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
  },

     {nAPT: "4",
     idInitiator: "Marcos",
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
  },

    {nAPT: "5",
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
  }
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