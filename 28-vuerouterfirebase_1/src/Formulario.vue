<template>
   <div id="app">
    <div>
      <form>    
    <!-- Based on the example of VUE events, from the video 
    https://wmedia.teachable.com/courses/140226/lectures/2073523 
    in the minute 07:00. With the property v-on: keyup.enter = "submitName ()" 
    when pressing enter we do the same as pressing the send button.  --> 
    <h1> FORMULARIO TABLA NAME
      <button @click="submitName()" v-on:keyup.enter="submitName()" >Add</button> </h1>               
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
                </form>
                <hr>
    </div>
   
   
   <!-- <h1> LISTAR APT </h1>
    
    <div>
      <ul>
        <li v-for="personName of names"
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
import { namesRef } from "./firebase";

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
      causes: "Reducción probabilidad de accidente",
    };      
},

    firebase: {
    names: namesRef,
    },
    
  methods: {
    submitName() {
      namesRef.push({
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
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false });
    },
    saveEditName(name) {
      const key = name[".key"];
      namesRef.child(key).set({
        name: person.name,
        edit: false
      });
    }
  }
};
</script>
<style>
form{

    
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
    color: #119164;
    align-self: auto;
    margin-top: 2px;
    
  }
  input {
    animation-duration: 0.3s;
    animation-name: slideinSelectCategoriaRiesgo;
    margin:  1px 10px 10px 10px;
    background-color: #e94444;
    border: 2px solid #14cbaf;
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
    color: #e5e9e8;
    font-size: 18px;

  
    text-align-last: center;
    
  }
   @keyframes slideinSelectCategoriaRiesgo {
    from {
      margin-left:200px;
      width: 75%;
       background-color: #e94444;
        border: 8px solid #14cbaf;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
      background-color: #e94444;
        border: 8px solid #14cbaf;
    }
  }
 button.n{
  
  
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
    color: #ffffff;
  
    position:fixed;
        top: 50%;
        left: 40%;
        width: 10%;
        height:10%;
        background-color: #e94444;
        border: 8px solid #14cbaf;
        font-size: 12px;
    
      animation-duration: 2s;
      animation-name: slideBtnFijo1;
    }
    
    @keyframes slideBtnFijo1 {
      from {
        margin-top:100%;
        left:1%;
      }
      10% {
        font-size: 65px;
        margin-left: 1%;
        background-color: rgb(143, 83, 16);
      }
      20% {
        font-size: 20px;
        margin-left: 1%;
        background-color: rgb(252, 252, 252);
      }
      50% {
        font-size: 65px;
        margin-left: 1%;
        background-color: rgb(253, 252, 250);
      }
    
      to {
        top: 1%;
        left: 40%;
        width: 10%;
        height: 10%;
        background-color: rgb(231, 231, 231);
      }
    }
</style>
