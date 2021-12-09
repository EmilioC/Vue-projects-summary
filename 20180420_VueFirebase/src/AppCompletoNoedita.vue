<template>
  <div id="app">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name"/>
      <button @click="submitName()">Add</button>
    </div>
    <h1> Hola que tal </h1>
    
    <div>
      <ul>
        <li v-for="personName of names"
        v-bind:key="personName['.key']">        
        <div v-if="!personName.edit">
          <p>{{personName.name}}</p>
          <p>{{personName.apellido}}</p>
          <p>{{personName.edit}}</p>
        <button @click="removeName(personName['.key'])">
          Remove</button>
        <button @click="setEditName(personName['.key'])">
          Edit</button>
        </div> 
         <div v-else>
            <input type="text" v-model="personName.name">
            <button @click="saveEditName(personaName)">
              Save</button>
            <button @click="cancelEdit(personaName['.key'])">
              Cancel</button>
          </div>
        
        </li>
      </ul>
    </div>   
  </div>
</template>

<script>
import { namesRef } from './firebase';

//Integramos Firebase
export default {
  data() {
    return {
      name: 'Paul',
      apellido: 'losa',
    }
  },
  firebase: {
    names: namesRef,
  },
  methods: {
    submitName() {
      namesRef.push({ 
        name: this.name, 
        edit: false,
        apellido: this.apellido, 
        });
      this.name ='';
    },
    removeName(key){
      namesRef.child(key).remove();
    },
    setEditName(key){
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key){
      namesRef.child(key).update({ edit: false });
    },
    saveEditName(name){
      const key = name ['.key'];
      namesRef.child(key).set({ name: person.name, edit: false });
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

bottom {
  background-color: transparent;
  border: 6px solid black;
}
</style>
