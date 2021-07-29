import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/



/*let progress_bar = document.getElementById ("welcome");
setTimeout (function() {
    progress_bar.classList.add ("close");
},9000);*/

window.onload = function(){
    let pagWelcome = document.getElementById("welcome");

    pagWelcome.style.visibility = "hidden"
    pagWelcome.style.opacity = "0";

}

console.log(data.pokemon[0].img);
const pokemonsBulbasaur = document.getElementById("bulbasaur").src=data.pokemon[0].img;