import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

let progress_bar = document.getElementById ("welcome");
setTimeout (function() {
    progress_bar.classList.add ("close");
},9000);