<template>
   <div id="app" >
<div class="grid-container">
  <div class="grid-item">
       <div class="formulario1">
      <form >   
   <button @click="submitName()">1</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
                </form>                
    </div>       
  </div>
  <div class="grid-item">
<div class="formulario2">
      <form >   
     <button @click="submitName()">2</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
                </form>               
    </div> 


  </div>
  <div class="grid-item">
<div class="formulario3">
      <form >   

   <button @click="submitName()">3</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->
      
                </form>                
    </div> 

  </div>
  <div class="grid-item">
<div class="formulario4">
      <form >   

   <button @click="submitName()">4</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->
      
                </form>                
    </div> 

  </div>
  <div class="grid-item">
      <div class="formulario5">
      <form >   
     <button @click="submitName()">ID</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
                </form>               
    </div> 


  </div>
  <div class="grid-item">
<div class="formulario6">
      <form >   
     <button @click="submitName()">6</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
                </form>               
    </div> 
  </div>
  <div class="grid-item">

<div class="formulario7">
      <form >   
     <button @click="submitName()">7</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
                </form>               
    </div> 

  </div>
  <div class="grid-item">
      <div class="formulario8">
      <form >   
     <button @click="submitName()">8</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
                </form>               
    </div> 


  </div>
  <div class="grid-item">
 <div class="formulario10">
      <form >   
     <button @click="submitName()">9</button>            
            <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
                </form>               
    </div>   

  </div>

  <div class="grid-item">
      <div class="formulario10">
        <form >   
        <button @click="submitName()">10</button>            
         <!--    <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
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
                </div>--> 
                <div class="form_group">
                    <label for="causes">REACTIVO CON BÚSQUEDA</label>
                    <input type="text" class="form-control" v-model="causes" />
                </div>      
                </form>               
    </div>  

  </div>
</div>     
        
    <div class="tabla1">  
    <table class="tablabtn1">        
        <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
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
                <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
              <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>
                
              <!--    --> 
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>          
            </tr>
    </table>   
</div> 








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
    
div.formulario1 {
    float: left;
    border: 11px solid rgb(188, 218, 218);
}
 div.formulario2 {
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario3 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario4 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario5 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario6 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario7 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario8 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario9 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.formulario10 {   
     float: left;
    border: 11px solid rgb(188, 218, 218);
}
div.tabla1 {   
    width: 100%;
    height: 1%;
    background-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
}
div.tabla2 {   
    width: 100%;
    height: 1%;
    background-color: rgb(255, 6, 6);
    color: rgb(126, 86, 86);
}

th{
    border: 0px;
    float: left;
    background-color: rgb(0, 255, 255);
    padding: 10 2px 2px 30px;
}
td{
    background-color: rgb(170, 208, 240);
    padding: 11px solids 1px 1px 1px 1px;
    float: left;
}
.serieV{
    background-color: rgb(102, 202, 216);
    padding: 10 2px 2px 1px;
    background-color: rgb(255, 255, 255);
    color: rgb(111, 161, 184);
    -webkit-animation: mymove1 0.5s infinite; /* Safari 4.0 - 8.0 */
    animation: mymove1 8s infinite;
    border-bottom: double;
    
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove1 {
    50% {box-shadow: 5px 2px 30px rgb(165, 246, 246);}
}

@keyframes mymove {
    50% {box-shadow: 50px 10px 30px 200px rgb(166, 199, 197);}
}


.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: rgb(36, 65, 88);
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(231, 210, 210, 0.8);
  padding: 2px;
  font-size: 30px;
  text-align: center;
}   

.grid-container1 {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: rgb(8, 13, 39);
  padding: 10px;
}
.grid-item1 {
  background-color: rgba(251, 255, 0, 0.8);
  border: 8px solid rgba(251, 0, 180, 0.8);
  padding: 2px;
  font-size: 30px;
  text-align: center;
}   

</style>
