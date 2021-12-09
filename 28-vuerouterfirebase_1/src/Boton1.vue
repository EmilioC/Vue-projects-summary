<template>
   <div id="app">
 <!-- <div class="formularioabajo">
      <form >            
   <h1> DATOS: basedatos-ccc9b/apt</h1>               
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="form-control"/>
                </div>
             <div class="form_group">
                    <label for="idsupervisor">SUPERVISOR</label>
                    <input type="text" class="form-control" v-model="supervisor" />
                </div>        
                <div class="form_group">
                    <label for="fecha">FECHA</label>
                    <input type="text" class="form-control" v-model="fecha" />
                </div>
                <div class="form_group">
                    <label for="descriptionAPT">DESCRIPCIÓN</label>
                    <input type="text" class="form-control" v-model="descripcion" />
                </div>
                <div class="form_group">
                    <label for="actionAPT">ACCIÓN TOMADA</label>
                    <input type="text" class="form-control" v-model="accion" />
                </div>
                <div class="form_group">
                    <label for="typeAPT">TIPO APT</label>
                    <input type="text" class="form-control" v-model="typeAPT" />
                </div>
                <div class="form_group">
                    <label for="category">CATEGORÍA APT</label>
                    <input type="text" class="form-control" v-model="category" />
                </div>
                <div class="form_group">
                    <label for="photoAPT">FOTO</label>
                    <input type="text" class="form-control" v-model="photo" />
                </div>
                <div class="form_group">
                    <label for="learningAPT">APRENDIZAJE</label>
                    <input type="text" class="form-control" v-model="aprendizaje" />
                </div>
                <div class="form_group">
                    <label for="causes">EFECTO EN LA INSTALACIÓN</label>
                    <input type="text" class="form-control" v-model="causes" />
                </div>
      <button @click="submitName()">Add</button>
                </form>
                <hr>
    </div> -->

<h1>TABLA APT - En Firebase /apt </h1>
   <!-- Ojo¡¡ the instance of the firebase in this case is "apt"
   You can find the how create the new object in:
    firebase: {
    apt: aptRef
  },
            
<table class="table1">
        <thead>
            <th>FECHA</th>
            <th>ID</th>
            <th>Aprendizaje</th>
            <th>Descripcion</th>
           <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>  

            <th>FECHA</th>
            <th>ID</th>
            <th>Aprendizaje</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>
        </thead >
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} 
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>
            </tr>
    </table> -->    
    <table class="tablabtn1">        
        <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID    T1</label>
                    <input v-model="fecha" type="text" class="form-control"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">Comprendí</label>
                    <input v-model="id" type="text" class="form-control"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="id">fecha</label>
                    <input v-model="aprendizaje" type="text" class="form-control"/>
                </div>
            </th>
            <div>
                <th>
                <button @click="submitName()">Add</button> 
                </th>               

            </div>
           <!-- <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>-->             
        </thead >
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.id }} </td>
              <!--  <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>--> 
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>

          
            </tr>
    </table>   

<!-- TABLA DERECHA -->


 <table class="tablabton2">
        <thead >
            <th class="cabecera1"> T 2</th>
            <th class="cabecera1">ID</th>
            <th class="cabecera1">Aprendizaje</th>
            <!--<th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>-->             
        </thead >
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.descripcion }} </td>
               <!-- <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>--> 
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>
<td><form> 
     <button @click="submitName()">Add</button>       
                 
            <!--     <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="form-control"/>
                </div>
             <div class="form_group">
                    <label for="idsupervisor">SUPERVISOR</label>
                    <input type="text" class="form-control" v-model="supervisor" />
                </div>        
                <div class="form_group">
                    <label for="fecha">FECHA</label>
                    <input type="text" class="form-control" v-model="fecha" />
                </div>
                <div class="form_group">
                    <label for="descriptionAPT">DESCRIPCIÓN</label>
                    <input type="text" class="form-control" v-model="descripcion" />
                </div>
                <div class="form_group">
                    <label for="actionAPT">ACCIÓN TOMADA</label>
                    <input type="text" class="form-control" v-model="accion" />
                </div>
                <div class="form_group">
                    <label for="typeAPT">TIPO APT</label>
                    <input type="text" class="form-control" v-model="typeAPT" />
                </div>
                <div class="form_group">
                    <label for="category">CATEGORÍA APT</label>
                    <input type="text" class="form-control" v-model="category" />
                </div>
                <div class="form_group">
                    <label for="photoAPT">FOTO</label>
                    <input type="text" class="form-control" v-model="photo" />
                </div>
                <div class="form_group">
                    <label for="learningAPT">APRENDIZAJE</label>
                    <input type="text" class="form-control" v-model="aprendizaje" />
                </div>
                <div class="form_group">
                    <label for="causes">EFECTO EN LA INSTALACIÓN</label>
                </div>--> 
      
                </form>
          </td>

<td><form> 
     <button @click="submitName()">Add</button>       
                 
            <!--     <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="form-control"/>
                </div>
             <div class="form_group">
                    <label for="idsupervisor">SUPERVISOR</label>
                    <input type="text" class="form-control" v-model="supervisor" />
                </div>        
                <div class="form_group">
                    <label for="fecha">FECHA</label>
                    <input type="text" class="form-control" v-model="fecha" />
                </div>
                <div class="form_group">
                    <label for="descriptionAPT">DESCRIPCIÓN</label>
                    <input type="text" class="form-control" v-model="descripcion" />
                </div>
                <div class="form_group">
                    <label for="actionAPT">ACCIÓN TOMADA</label>
                    <input type="text" class="form-control" v-model="accion" />
                </div>
                <div class="form_group">
                    <label for="typeAPT">TIPO APT</label>
                    <input type="text" class="form-control" v-model="typeAPT" />
                </div>
                <div class="form_group">
                    <label for="category">CATEGORÍA APT</label>
                    <input type="text" class="form-control" v-model="category" />
                </div>
                <div class="form_group">
                    <label for="photoAPT">FOTO</label>
                    <input type="text" class="form-control" v-model="photo" />
                </div>
                <div class="form_group">
                    <label for="learningAPT">APRENDIZAJE</label>
                    <input type="text" class="form-control" v-model="aprendizaje" />
                </div>
                <div class="form_group">
                    <label for="causes">EFECTO EN LA INSTALACIÓN</label>
                </div>--> 
      
                </form>
          </td>
          
            </tr>
    </table>   
<!--
    <h1> LISTAR APT </h1>



    <h1> LISTAR APT </h1>
    
    <div>
      <ul>
        <li v-for="personName of apt"
        v-bind:key="personName['.key']">        
          <p>
          <button @click="removeName(personName['.key'])">
          Remove</button>
          {{personName.id}}
          {{personName.supervisor}}
          {{personName.fecha}}
          {{personName.descripcion}}
          {{personName.accion}}
          {{personName.typeAPT}}
          {{personName.category}}
          {{personName.photo}}
          {{personName.aprendizaje}}
          {{personName.causes}}
           </p>                 
        </li>
      </ul>
    </div> -->  
  </div>
</template>
<script>
import { aptRef } from "./firebase";

export default {
  data() {
    return {
      id: null,
      supervisor: "JA",
      fecha: "20/04/2018",
      descripcion: "Material dentro del recinto",
      accion: "Retirada del material",
      typeAPT: "Comportamiento",
      category: "Riesgo tropezar o caer",
      photo: "si",
      aprendizaje: "Responsabilidad equipos en buen estado",
      causes: "Reducción probabilidad de accidente"
    };
  },

  firebase: {
    apt: aptRef
  },

  methods: {
    submitName() {
      aptRef.push({
        id: this.id,
        supervisor: this.supervisor,
        fecha: this.fecha,
        descripcion: this.descripcion,
        accion: this.accion,
        typeAPT: this.typeAPT,
        category: this.category,
        photo: this.photo,
        aprendizaje: this.aprendizaje,
        causes: this.causes
      });
      this.name = "";
    },
    removeName(key) {
      aptRef.child(key).remove();
    },
    setEditName(key) {
      aptRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      aptRef.child(key).update({ edit: false });
    },
    saveEditName(name) {
      const key = name[".key"];
      aptRef.child(key).set({
        name: person.name,
        edit: false
      });
    }
  }
};
</script>
<style>
/*TEST BOTON IN SCREEN 1*/

div.formularioabajo {
  top: 230%;
}

table.tablabtn1 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;

  /**position: fixed;**/
  top: 30%;
  left: 40%;
  width: 30%;
  height: 30%;
  background-color: #5878ca;
  border: 8px solid #889ccf;
  font-size: 20px;
  /** EXAMPLE BORDER OF STYLE IN:
        appProject/20180320_APT/pruebatablas.html**/
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca 2px solid #5878ca;

  animation-duration: 2s;
  animation-name: slideBtnFijo1;
        display:scroll;
        position:fixed;
        bottom:320px;
        right:0px;
        overflow-y: hidden;
    overflow: auto;


}

@keyframes slideBtnFijo1 {
  from {
    margin-top: 100%;
    left: 1%;
  }
  10% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  20% {
    font-size: 20px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  50% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }

  to {
    top: 1%;
    left: 30%;
    width: 10%;
    height: 10%;
    background-color: blue;
  }
}

.tablabton2 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #232500;
  size: 20px;

  position: fixed;
  top: 200px;
  left: 1%;
  width: 10%;
  height: 10%;
  background-color: #b3b962;
  border: 8px solid #889ccf;
  font-size: 12px;
  /** EXAMPLE BORDER OF STYLE IN:
        appProject/20180320_APT/pruebatablas.html**/
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 200px 200px 35px 200px;
  border: 2px solid #5878ca 2px solid #5878ca;

  animation-duration: 2s;
  animation-name: slideBtnFijo1;
}

@keyframes slideBtnFijo1 {
  from {
    margin-top: 100%;
    left: 1%;
  }
  10% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  20% {
    font-size: 20px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  50% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }

  to {
    top: 1%;
    left: 30%;
    width: 10%;
    height: 10%;
    background-color: blue;
  }
}

input.inputlearningAPT {
  width: 200px;
}

td {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;

  /**position: fixed;
  top: 10%;
  left: 1%;
  width: 10%;
  height: 10%;*/
  background-color: #727786;
  border: 8px solid #889ccf;
  /** EXAMPLE BORDER OF STYLE IN:
        appProject/20180320_APT/pruebatablas.html**/
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 200px 200px 200px 200px;
  border: 2px solid #5878ca 2px solid #5878ca;
  /**
  animation-duration: 2s;
  animation-name: slideBtnFijo1;**/
}

@keyframes slideBtnFijo1 {
  from {
    margin-top: 100%;
    left: 1%;
  }
  10% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  20% {
    font-size: 20px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  50% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(197, 192, 185);
  }

  to {
    top: 1%;
    left: 30%;
    width: 10%;
    height: 10%;
    background-color: rgb(236, 236, 240);
  }
}

th.cabecera1 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #e71313;
  font-size: 40px;

  /**position: fixed;
  top: 10%;
  left: 1%;
  width: 10%;
  height: 10%;*/
  background-color: #727786;
  border: 8px solid #889ccf;
  font-size: 12px;
  /** EXAMPLE BORDER OF STYLE IN:
        appProject/20180320_APT/pruebatablas.html**/
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 200px 200px 200px 200px;
  border: 2px solid #5878ca 2px solid #5878ca;

  animation-duration: 0.5s;
  animation-name: slideBtnFijo1;
}

@keyframes slideBtnFijo1 {
  from {
    margin-top: 100%;
    left: 1%;
  }
  10% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  20% {
    font-size: 20px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  50% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(197, 192, 185);
  }

  to {
    top: 1%;
    left: 30%;
    width: 10%;
    height: 10%;
    background-color: rgb(236, 236, 240);
  }
}

table {
  border: 1px solid black;
  height: 1%;
  text-align: left;
  overflow-x: auto;
}
th,
td {
  padding: 2%px;
  text-align: left;
  border-bottom: 1px solid rgb(0, 5, 4);
}
tr:nth-child(even) {
  background-color: #dbeaeb;
}
div {
  overflow-x: auto;
}
form {
  margin-top: 2%;
  height: 100%;
  width: 50%;
  background-color: #889ccf;
  border-radius: 10px;
  border-bottom: 2%;
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
}

input {
  animation-duration: 4s;
  animation-name: slideinSelectCategoriaRiesgo;
}

@keyframes slideinSelectCategoriaRiesgo {
  from {
    margin-left: 200px;
    width: 75%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

select.selectTipoRiesgo {
  animation-duration: 4s;
  animation-name: slideinSelectCategoriaRiesgo;
}

@keyframes slideinSelectCategoriaRiesgo {
  from {
    margin-left: 200px;
    width: 75%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

select.SelectEmpleados {
  animation-duration: 6s;
  animation-name: slideinSelectEmpleados;
}

@keyframes slideinSelectEmpleados {
  from {
    margin-left: 200px;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

select.categoria {
  animation-duration: 5s;
  animation-name: slideinSelectTipoRiesgo;
}

@keyframes slideinSelectTipoRiesgo {
  from {
    margin-left: 200px;
    width: 75%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

canvas {
  animation-duration: 2s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

table.table2 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #889ccf;
  margin: 0 0 0px;
  overflow: hidden;
  padding: 200px;
  border-radius: 35px 0px 35px 0px;
  border-block-end-color: #45a049;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca;
  width: 50%;
}

table.tabla1 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #889ccf;
  margin: 1% 0 25px;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca 2px solid #5878ca;
  width: 50%;

  animation-duration: 2s;
  animation-name: botonEfecto1;
}

tbody.bordetabla {
  background: #01123d;
}

th,
td {
  text-align: left;
  padding: 8px;
  text-shadow: #4caf50;
  border: 4px solid rgb(252, 252, 252);
  border-top: 1px solid rgb(252, 252, 252);
  border-left: 1px solid rgb(252, 252, 252);
}

img.imagen1 {
  position: fixed;
  top: 20px;
  right: 200px;
  width: 80px;
  height: 80px;
}

img.imagen1 {
  animation-duration: 5s;
  animation-name: efectoImagen1;
  animation-iteration-count: 1;
}

@keyframes efectoImagen1 {
  from {
    top: 20px;
    right: 200px;
  }

  100% {
    font-size: 20px;
    margin-left: 200px;
    width: 100px;
  }
  75% {
    font-size: 20px;
    margin-left: 200px;
    width: 250px;
    background-color: orangered;
  }

  to {
    top: 20px;
    right: 200px;
  }
}

img.imagen2 {
  position: fixed;
  top: 20px;
  right: 100px;
  width: 80px;
  height: 80px;
}

img.imagen2 {
  animation-duration: 5s;
  animation-name: efectoImagen2;
  animation-iteration-count: 1;
}

@keyframes efectoImagen2 {
  from {
    top: 20px;
    right: 100px;
  }

  10% {
    top: 30px;
  }
  10% {
    top: 40px;
    right: 30px;
  }

  to {
    top: 20px;
  }
}

button.btnFijo1 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;

  position: fixed;
  top: 1%;
  left: 40%;
  width: 10%;
  height: 10%;
  background-color: #5878ca;
  border: 8px solid #889ccf;
  font-size: 12px;

  animation-duration: 2s;
  animation-name: slideBtnFijo1;
}

@keyframes slideBtnFijo1 {
  from {
    margin-top: 100%;
    left: 1%;
  }
  10% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  20% {
    font-size: 20px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  50% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }

  to {
    top: 1%;
    left: 40%;
    width: 10%;
    height: 10%;
    background-color: blue;
  }
}
button.btnFijo2 {
  position: fixed;
  top: 1%;
  right: 2%;
  width: 7%;
  height: 10%;
  background-color: #5878ca;
  border: 8px solid #889ccf;
}

button.botonSticky {
  position: sticky;
  top: 5px;
  padding: 8px;
  left: 45px;
  background-color: #5878ca;
  border: 8px solid #889ccf;
}

button.btnFijo3 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;

  position: fixed;
  top: 1%;
  left: 30%;
  width: 10%;
  height: 10%;
  background-color: #5878ca;
  border: 8px solid #889ccf;
  font-size: 12px;

  animation-duration: 2s;
  animation-name: slideBtnFijo1;
}

@keyframes slideBtnFijo1 {
  from {
    margin-top: 100%;
    left: 1%;
  }
  10% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  20% {
    font-size: 20px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }
  50% {
    font-size: 65px;
    margin-left: 1%;
    background-color: rgb(143, 83, 16);
  }

  to {
    top: 1%;
    left: 30%;
    width: 10%;
    height: 10%;
    background-color: blue;
  }
}

button.botonEfecto1 {
  animation-duration: 2s;
  animation-name: botonEfecto1;
  animation-iteration-count: 1;
}

@keyframes botonEfecto1 {
  from {
    margin-left: 50%;
    width: 50%;
    background-color: #fdfdff;
    font-size: 2px;
  }

  20% {
    font-size: 22px;
    margin-left: 200px;
    width: 250px;
    background-color: rgb(189, 179, 178);
  }
  50% {
    font-size: 2px;
    margin-left: 200px;
    width: 25px;
    background-color: #5878ca;
  }
  25% {
    font-size: 20px;
    margin-left: 200px;
    margin-top: 2px;
    width: 200px;
    background-color: #e7eaf1;
  }
  5% {
    font-size: 30px;
    margin-left: 200px;
    width: 300px;
    background-color: #5878ca;
  }

  100% {
    font-size: 20px;
    margin-left: 200px;
    width: 250px;
    background-color: 5878ca;
  }

  to {
    margin-left: 0%;
    margin-right: 10px;
    background-color: #e7eaf1;
    width: 50%;
  }
}

button.botonEfecto2 {
  animation-duration: 2s;
  animation-name: botonEfecto2;
  animation-iteration-count: 2;
}

@keyframes botonEfecto2 {
  from {
    margin-left: 500px;
    width: 10px;
  }

  10% {
    font-size: 20px;
    margin-left: 200px;
    width: 400px;
    background-color: blue;
  }
  75% {
    font-size: 20px;
    margin-left: 200px;
    width: 250px;
    background-color: orangered;
  }

  to {
    margin-left: 0%;
    margin-right: 10px;
    background-color: rgb(189, 179, 178);
    width: 200px;
  }
}

label {
  margin-left: 5%;
  animation-duration: 4s;
  animation-name: botonEfecto2;
  animation-iteration-count: 1;
}

@keyframes botonEfecto2 {
  from {
    margin-left: 0%;
    width: 10px;
    background-color: #ffffff;
    font-color: #ffffff;
  }

  10% {
    font-size: 20px;
    margin-left: 2%;
    background-color: #ffffff;
    font-color: #ffffff;
  }
  75% {
    font-size: 20px;
    margin-left: 10%;
    width: 250px;
  }

  to {
    margin-left: 5%;
    margin-right: 10px;
    background-color: rgb(189, 179, 178);
    width: 200px;
  }
}

/* Estilo aplicado a formulario de W3school.com:
   https://www.w3schools.com/css/tryit.asp?filename=trycss_forms*/

input[type="text"],
select {
  width: 100%;
  display: inline-block;
  border: 3px solid rgb(200, 223, 204);
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

/* Ejemplo animación texto: https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations/Usando_animaciones_CSS
  }*/
input.inputFormularioAPT {
  background-color: white;
}

p {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;

  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #889ccf;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca;
}
</style>
