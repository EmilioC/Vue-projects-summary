<template>
    <section>
        <section>
        <h1>Rutas con Vue Router</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <hr>
        <router-view></router-view>
    </section>
    </section>
</template> 

<script>
    export default {
    }
</script>

<style>
    .activo a {
        color: red;
    }
</style>