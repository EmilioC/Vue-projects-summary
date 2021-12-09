
    // Initialize Firebase
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
    // Vue stuff
    new Vue({
        el: '#app',
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
                db.ref('/chats/')
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
    });
