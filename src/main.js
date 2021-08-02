import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);



let progress_bar = document.getElementById ("welcome");
setTimeout (function() {
    progress_bar.classList.add ("close");
    document.getElementById("items").style.display = "block";

const pokemons = data.pokemon;
console.table(pokemons);

const items = document.getElementById("items");
const templateCard = document.getElementById("pokemon_card").content;
const fragment = document.createDocumentFragment();


const mostrarcard = pokemons => {
    pokemons.forEach(pokemon => {
        templateCard.querySelector("h2").textContent = pokemon.name
        templateCard.querySelector("img").setAttribute("src", pokemon.img)
        templateCard.querySelector("span").textContent = pokemon.num
        templateCard.querySelector("small").textContent = pokemon.type
        const clone = templateCard.cloneNode(true)

        fragment.appendChild(clone)
    });
    items.appendChild(fragment);
};
mostrarcard(pokemons);



},9000);






