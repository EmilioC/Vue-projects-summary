<template>
  <div id="app">
     

    <section>
        <router-link to="/">Home</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <router-link to="/lista">Lista</router-link>
        <router-link to="/listafuera">Lista tabla NAME</router-link>
        <router-link to="/formulario">Formulario NAME</router-link>
        <router-link to="/listarzona">Lista tabla APT</router-link>
        <router-link to="/formularioapt">Formulario APT</router-link>
        <router-link to="/resumen1">Resumen 1</router-link>
        <router-link to="/boton1"> Boton 1</router-link>
        <router-link to="/boton2"> Boton 2</router-link>
        <hr>
        <router-view></router-view>
    </section>
  </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
