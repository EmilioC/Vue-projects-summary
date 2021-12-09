<template>
  <div id="app">
    <img src="./assets/IconocascoPequeno.png" width="400" height="200">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ' GASES CARBUROS METÁLICOS'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2c65a7;
}
</style>
