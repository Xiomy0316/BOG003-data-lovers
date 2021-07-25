import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/*console.log(data.pokemon[0].img);
document.getElementById("img-pokemon").src=data.pokemon[0].img;
let frutas = ['manzana', 'piña','pera', 'kiw']
console.log(frutas[0]);*/

/*document.getElementById("welcome").style.display = "none";
document.getElementById("pokemons").style.display = "block";*/

let progress_bar = document.getElementById ("welcome");
setTimeout (function() {
    progress_bar.classList.add ("close");
},9000);
