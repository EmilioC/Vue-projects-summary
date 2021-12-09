
//Cargamos 'vue', localizado en la carpeta/node_modules/
import Vue from 'vue'
//Cargamos la instancia que creammos debajo, en new Vue ({ el:'#app'......})
import App from './App.vue'

//Creamos una nueva instacia
new Vue({

  //Con la propiedad el: le indico que tiene que ir a <div id="app"> y ejecutará
  //todo lo que hay dentro del div. 
  el: '#app',

  //Con la funcion render, compilamos todo lo que hay en el archivo: 
  //    1.- Los import que tenemos al principio.
  //    2.- Cargamos toda la estructura que hay dentro del archivo App.vue  
  render: h => h(App)
})
