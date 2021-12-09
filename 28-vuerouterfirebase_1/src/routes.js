import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Lista from './components/Lista.vue';
import Listafuera from './Listafuera.vue';
import Formulario from './Formulario.vue';
import Listarzona from './ListarZona.vue';
import FormularioApt from './FormularioApt.vue';
import Resumen1 from './Resumen1.vue';
import Boton1 from './Boton1.vue';
import Boton2 from './Boton2.vue';



export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/lista', component: Lista},
    {path: '/listafuera', component: Listafuera},
    {path: '/formulario', component: Formulario},
    {path: '/listarzona', component: Listarzona},
    {path: '/formularioapt', component: FormularioApt},
    {path: '/resumen1', component: Resumen1},
    {path: '/boton1', component: Boton1},
    {path: '/boton2', component: Boton2},
];