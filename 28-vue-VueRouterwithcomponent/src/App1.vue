<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/contacto">Consultas</router-link>
        <router-link to="/formulario">Formulario</router-link>
        <router-link to="/formulario1">Formulario 1</router-link>
                <hr>
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
    }
</script>