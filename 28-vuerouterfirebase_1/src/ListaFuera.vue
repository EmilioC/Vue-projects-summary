<template>
   <div id="app">
    <!-- <div>
      <form>    
        
   <h1> LISTA FUERA DE DIRECTORIO COMPONENTS </h1>               
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
    </div>-->


    <!-- Example with index in v-for -->
<h1> Example with index in v-for </h1>   
<table class="table1">
        <thead>
            <th>Nº</th>
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
            <tr v-for="(mensaje, index) of names"
        v-bind:key="mensaje['.key']" >
                <td> {{ index }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>
            </tr>
    </table>  

    <h1> TABLA NAMES </h1>   
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
        </thead >
            <tr v-for="mensaje of names"
                v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>
            </tr>
    </table>  

<!--
    <h1> LISTAR APT </h1>
    
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
      causes: "Reducción probabilidad de accidente"
    };
  },

  firebase: {
    names: namesRef
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
table {
  border: 1px solid black;
  height: 1%;
  text-align: center;
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
</style>
