<!-- Hemos tenido que utilizar nmp install -s axios para acceder
a una página donde podemos utilizar personas https://randomuser.me/ para conectarnos
utilizamos axios https://github.com/axios/axios,
https://www.arquitecturajava.com/axios-js-una-libreria-de-promesas/
Axios js es una librería de JavaScript construida con el objetivo de gestionar la programación 
asíncrona con promesas. Mucha gente me preguntará ¿Por qué usar Axios y no usar jQuery 
que tiene una librería de promesas madura? . La pregunta más bien es ¿Por qué usar jQuery?.
jQuery es la librería de Javascript de referencia a nivel de manipulación del arbol DOM . Pero su 
nivel de abstracción es básico, simplifica el manejo de DOM y gestiona las peticiones Ajax. 
Hoy por hoy las opciones basadas en componentes como React.js  están avanzando en 
JavaScript a gran velocidad.  React no usa jQuery para gestionar la capa de presentación. Así 
pues nos encontramos con soluciones que no se apoyan en jQuery para gestionar la capa de 
presentación y el árbol DOM. Es necesario tener a nuestra disposición alguna librería de 
JavaScript que maneje las peticiones Ajax y  promesas de forma independiente, Axios js es una de 
las opciones.

 una vez instalado aparecerá
en el archivo package.json  
 https://randomuser.me/ A free, open-source API for generating random user data. Like Lorem Ipsum, 
 but for people.-->
<template>
    <div>
        <template v-if="persona">
            <h1 v-text="datosPersona.nombre"></h1>
            <h2 v-text="datosPersona.correoe"></h2>
            <h2 v-text="datosPersona.postcode"></h2>
            <h2 v-text="datosPersona.phone"></h2>
            <img :src="datosPersona.foto">
        </template>
        <span v-else>Cargando persona...</span>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        mounted() {
            axios.get('https://randomuser.me/api/')
                .then((respuesta) => {
                    this.persona = respuesta.data.results[0];
                })
        },
        data() {
            return {
                persona: null,
            }
        },
        computed: {
            datosPersona() {
                return {
                    nombre: `${this.persona.name.first} ${this.persona.name.last}`,
                    foto: this.persona.picture.large,
                    correoe: this.persona.email,
                    postcode: this.persona.name.first,
                    phone: this.persona.phone,
                }
            }
        }
    }
</script>

<style></style>