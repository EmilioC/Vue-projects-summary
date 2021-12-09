
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
