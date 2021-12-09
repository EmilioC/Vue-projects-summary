
// INICIO: Ejercicio: Aprende JavaScript esencial #18 - Metodos de matrices
// https://www.youtube.com/watch?v=UmRRIhRS2YA

var dias =[
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes"]

    var p2 = document.getElementById("p2");
    function recorrerArray(){ 
       
        var array ="";
            for(var i=0; i<dias.length; i++){
           
           array= array+ " "+dias[i];           
            }
            p2.innerHTML=array;
    }
// FIN : 
var h1mensaje = document.getElementById("demo");

function saludar (){
    var inputNombre = document.getElementById("input1").value;
    h1mensaje.innerHTML ="Hola que tal --<"+ inputNombre;
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
