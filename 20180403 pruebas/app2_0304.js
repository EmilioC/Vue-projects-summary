
// INICIO: Ejercicio: Aprende JavaScript esencial #18 - Metodos de matrices
// https://www.youtube.com/watch?v=UmRRIhRS2YA

var dias =[
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes"]

var p2 = document.getElementById("p2");
var tablaLlena="0";
console.log (p2);

    function recorrerArray(){        
        var array ="";
        console.log ("1 "+p2);

        if(tablaLlena=="0"){
                console.log ("if-IN "+tablaLlena);
            var array ="<ul>";   
            for(var i=0; i<dias.length; i++){
                array=array+"<li>"+dias[i]+"</li>";
                            
            }
                array +="</ul>";
                p2.innerHTML=array;
                tablaLlena="1";
                console.log ("if-Out "+tablaLlena); 
            } else {            
                console.log ("else-IN "+tablaLlena); 
            p2.innerHTML=""; 
                console.log ("else-OUT "+tablaLlena);
            tablaLlena="0";
        }
    }

// View image or hide

var imagen = document.getElementById("photo1");
var fotoOnOff ="on";
console.log ("imagen "+imagen.visibility);

function viewImage (){
   if(fotoOnOff=="on") {
    imagen.style.visibility = "hidden"
    p2.style.visibility = "hidden"
    fotoOnOff ="off";
   } else{
    imagen.style.visibility = "visible"
    p2.style.visibility = "visible"
    fotoOnOff ="on";  
   }

}

var h1mensaje = document.getElementById("demo");

function saludar (){
    var inputNombre = document.getElementById("input1").value;
    h1mensaje.innerHTML ="Hola que tal --<"+ inputNombre;
    console.log ("1 ");
}

function despedir (){
    var inputNombre = document.getElementById("input2").value;
    h1mensaje.innerHTML = "Buenas noches --> "+inputNombre;
    }

function consolidar (){
    var inputNombre = document.getElementById("input3").value;
    var p1Opinion = document.getElementById("p1");

    if (inputNombre==""){
        h1mensaje.innerHTML = "Buenas noches --> "+inputNombre; 
        p1Opinion.innerHTML = "imput3 vacío";
    } else {
    h1mensaje.innerHTML = "Introduzca --> "+inputNombre;
    p1Opinion.innerHTML = inputNombre;
    
    }
}
