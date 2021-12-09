// ¿Quién 'vive' en cada ruta?
const home = Vue.component('Home', {
    template: '<h2>Portada</h2>',
});

const tabla = Vue.component('tabla', {
    template: '<h2>Tabla</h2>',
});

const formulario = Vue.component('formulario', {
    template: '<h2>Formulario</h2>',
});

const informacion = Vue.component('informacion', {
    template: '<h2>Información</h2>',
});

// Plano de destinos con sus rutas
const routes = [
    //Hacemos refererencia a una ruta y a un componente
    {path: '/', component: home},
    {path: '/tabla', component: tabla},
    {path: '/formulario', component: formulario},
    {path: '/informacion', component: informacion},
];

// Instaciar el componente enrutador
const router = new VueRouter({
   routes: routes,
});

new Vue({
    //Declaramos router y el objeto Vue tendrá acceso a la instancia
    //del coponente erutador
    router: router,
    el: 'main',
});