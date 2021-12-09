
var numero = 20;
var nombre ="Juan";
console.log("El maravilloso número es"+numero);
alert ("Hola como estamos");



var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;

var demo = document.getElementById("demo");
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
    console.log(cars[i]);
}
demo= text;



var car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("demo").innerHTML = car.type;

function ModeloColor (){
    document.getElementById("demo").innerHTML=
    car.type;
}

function myFunction(name) {
    return 
   var nombre= document.getElementById("edad").value;
   document.getElementById("nombre").innerHTML=nombre;

}
document.getElementById("demo").innerHTML = myFunction("John");

Vue.component('game-add', {
    template: `
        <div>
            <input type="text" v-model="titleGame" />
            <button @click="emitNewGame">Añadir</button>
            
        </div> 
    `,
    data: function () {
        return {
            titleGame: null
        }
    },
    methods: {
        emitNewGame: function () {
            if (this.titleGame) {
                this.$emit('new', { title: this.titleGame });
                this.titleGame = null;
            }
        }
    },
});

Vue.component('game-list', {
    props: ['games'],
    template: `
            <ol>
            <game-item v-for="item in games" :game="item" :key="item.id"></game-item>
            <game-item v-for="item in games" :game="item" :key="item.id"></game-item>
            <game-item v-for="item in games" :game="item" :key="item.id"></game-item>
        </ol>
    `
});

Vue.component('game-item', {
    props: ['game'],
    template: '<li>{{ game.title }}</li>'
});


Vue.component('game-header', {
    template: '<h1>Video Games</h1>'
});

Vue.component('game-header1', {
    template: '<h1>Como estamos</h1>'
});

const app = new Vue({
    el: '#app',
    template: `
        <div class="view">
            <game-header></game-header>
            <game-header1>"Hola que tal" </game-header1>
            <game-add @new="addNewGame"></game-add>
            <game-list v-bind:games="games"></game-list>
        </div>
    `,
    data: {
        message: 'Video Games',
        games: [
            { title: 'ME: Andromeda' },
            { title: 'Fifa 2017' },
            { title: 'League of Legend' },
            { title: 'De acuerdo' },
        ]
    },
    methods: {
        addNewGame: function (game) {
            this.games.push(game);
        }
    }
});