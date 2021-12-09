
  function ampliar_info(){

      var ampliado = document.getElementById ('texto_ampliado');
      var resumen = document.getElementById ('texto_resumen');
      var enlace = document.getElementById ('enlace_ver');

      console.log (resumen.style.display);

      if (resumen.style.display == 'block' || resumen.style.display == ''){
        resumen.style.display = 'none';
        ampliado.style.display = 'block';   
        enlace.innerHTML = "Ocultar más información";     
      }
      else{
        resumen.style.display = 'block';
        ampliado.style.display = 'none'; 
        enlace.innerHTML = "Mostrar más información ";
      }
  } 

  function viewAPT(){
    
    var selectEmpleados = document.getElementById("selectEmpleados").value;
    var selectcomportamiento = document.getElementById("selectcomportamiento").value;
    var tiposRiesgos = document.getElementById("tiposRiesgos").value;
    var descripcion = document.getElementById ("descripcion").value;
    var accion = document.getElementById ("accionTomada").value;
    var fecha = document.getElementById ("fecha").date;

    document.getElementById("parrafo1").innerHTML = "Empleado: "+selectEmpleados 
    + "<br/>Tipo: " +selectcomportamiento + "<br/>Categoría: "+ tiposRiesgos
     + "<br/>Descripción: "+ descripcion + "<br/>Acción tomada: "+ accion
      + "<br/>Fecha: "+fecha;

    document.getElementById("tdempleado").innerHTML = selectEmpleados;
    document.getElementById("tdtipo").innerHTML = selectcomportamiento;
    document.getElementById("tdcategoria").innerHTML = tiposRiesgos;
    document.getElementById("tdescripcion").innerHTML = descripcion;
    document.getElementById("tdacciontomada").innerHTML = accion;
    document.getElementById("tdfecha").innerHTML = fecha;
   
  }

  function color (){
    var selectEmpleados = document.getElementById("selectEmpleados").value;
    fondoEmpleado = document.getElementById("tdempleado");

    if (selectEmpleados=="Emilio")
    {
      fondoEmpleado.style.backgroundColor ="#00ff00";
      fondoEmpleado.style.ampliar_info;      
    }
    else{
      fondoEmpleado.style.backgroundColor ="#ff0000";
    }
  }

  function infocomportamiento(){

    var tdtipo = document.getElementById("tdtipo").value;
    if(tdtipo=="Condición"){
      alert('Escribimos texto comportamiento');
    }
    else{
      alert('Aquello que ocurre a un estado material o existente, condiciones que normalmente involucran “cosas” u objetos y'+
      +'normalmente persisten durante un largo periodo de tiempo.');
    }
  }

  var jsonAPT ={"APT":[
    {"nAPT":"1", 
    "idInitiator":116716,
    "idSupervisor":"JARomero",
    "dateAPT":"17/03/2018",
    "areaAPT":"Bordas", 
    "descriptionAPT":"Cuadro eléctrico con cerradura rota",
    "actionAPT":"Reparación cerradura",
    "typeAPT":"Condicion",
    "category":"Riesgo eléctrico",
    "photoAPT":"Foto 1",
    "learningAPT":"Humedad provoca derivación eléctrica",
    "cause":"Deterioro material"
    }]}
    
    

