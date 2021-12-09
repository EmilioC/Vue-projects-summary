<template>
        <div >
            <h1>{{msg}}</h1>
            <h1>FORMULARIO 1</h1>
<div >
                <!-- Tabla muestra APT desde Firebase en pantalla-->
        
            <form @submit.prevent="enviarMensaje">
                    <input v-model="mensaje" type="text" class="form-control"/> 
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
                <input type="submit" value="Enviar mensaje">
                </form>
                <hr>
      <h1>TABLE 1 </h1>
               
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
            <tr v-for="(mensaje, index) in mensajes" :key="index" >
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>
                <td> <button @click="eliminarMensaje(mensaje.key)">Borrar</button></td>
            </tr>
    </table>   
            <h1>TABLE 3 </h1>
            <ul>
             <li v-for="(mensaje, index) in mensajes" :key="mensaje">
                        {{index}} - {{mensajes.id}}
                     <tr><td>
                            <small><i>{{ mensaje.id }}</i></small>
                            <small><i>{{ mensaje.supervisor }}</i></small>
                            <small><i>{{ mensaje.fecha }}</i></small>
                            <small><i>{{ mensaje.descripcion }}</i></small>
                            <small><i>{{ mensaje.accion }}</i></small>
                            <small><i>{{ mensaje.typeAPT }}</i></small>
                            <small><i>{{ mensaje.category }}</i></small>
                            <small><i>{{ mensaje.photo }}</i></small>
                            <small><i>{{ mensaje.aprendizaje }}</i></small>
                            <small><i>{{ mensaje.causes }}</i></small>
                        <!-- eliminamos solo el mensaje.key, que identifica de manera unívoca el mensaje seleccionado-->
                        <button @click="eliminarMensaje(mensaje.key)">delete</button>
                     </td></tr>
                    </li>
                </ul>
        </div>
        </div>
</template>

<script >
    import firebase from 'firebase';
     const config = {
        apiKey: "AIzaSyAHp3vB8Mc8JzdSXptEh3KY9LBQ97PeNLg",
        authDomain: "basedatos2-ccc9b.firebaseapp.com",
        databaseURL: "https://basedatos2-ccc9b.firebaseio.com",
        projectId: "basedatos2-ccc9b",
        storageBucket: "basedatos2-ccc9b.appspot.com",
        messagingSenderId: "965566008304"
    };
    firebase.initializeApp(config);
    const db = firebase.database();
export default{
        created() {
        db.ref('/chats')
                .on('value', snapshot => this.cargarMensajes(snapshot.val()))
        },
        data: {
            mensaje: null,
            id: null,
            supervisor: null,
            fecha: null,
            descripcion: null, 
            accion: null, 
            typeAPT: null,
            category: null,
            photo: null,
            aprendizaje: null,
            causes: null,          

            mensajes: [],
                        
        },
        methods: {
            cargarMensajes(mensajes) {
                this.mensajes = [];
                for (let key in mensajes) {
                    this.mensajes.push({
                        mensaje: mensajes[key].mensaje,
                        id: mensajes[key].id,
                        supervisor: mensajes[key].supervisor,
                        fecha: mensajes[key].fecha,
                        descripcion: mensajes[key].descripcion,
                        accion: mensajes[key].accion,
                        typeAPT: mensajes[key].typeAPT,
                        category: mensajes[key].category,
                        photo: mensajes[key].photo,  
                        aprendizaje: mensajes[key].aprendizaje, 
                        causes: mensajes[key].causes,                      

                        key: key,
                    });
                }
                //Mostramos en primer lugar los últimos valores incorporados en la matriz. 
                this.mensajes.reverse();
            },
            enviarMensaje() {
                db.ref('/chats')
                    .push({
                        mensaje: this.mensaje,
                        supervisor: this.supervisor,
                        descripcion: this.descripcion,
                        accion: this.accion,
                        fecha: this.fecha,
                        typeAPT: this.typeAPT,
                        id: this.id,
                        category: this.category,
                        photo: this.photo,
                        aprendizaje: this.aprendizaje,
                        causes: this.causes,
                    })
                    .then((data) => {
                        //Limpiaríamos cada input con: ejemplo supervisor
                        //this.supervisor= ' '; 
                        console.log(data.key);
                        console.log(this.username);
                    });
            },
            //Recibimos como parámetro key: idenditifador único de actualización en Firebase
            editarMensaje(mensaje, key) {
                //Definimos qué debemos actualizar. En este caso especificando key generado
                // cuando cargamos el mensaje. 
                db.ref('/chats/' + key).update({
                    //Solo actualizamos el mensaje. Lo único que hemos modificado. 
                    mensaje: mensaje.innerHTML
                });
            },
            eliminarMensaje(key){
                if(confirm("Seguro?")){
                //Del objeto firebase, concretamente el db que representa la base de datos en tiempo real
                //eleminará el que coincida con el key (identificador unívoco)
                db.ref('/chats/' + key).remove();   
                }             
            },
        }
}
</script>

