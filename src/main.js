import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


//funcion de carga
let progress_bar = document.getElementById("welcome");
setTimeout(function () {
    progress_bar.classList.add("close");
// funcion y llamado de las tarjetas
    const pokemons = data.pokemon;
    console.table(pokemons);

    mostrarcard(pokemons);


}, 9000);

//creacion de las tarjetas

const items = document.getElementById("items");
const templateCard = document.getElementById("pokemon_card").content;
const fragment = document.createDocumentFragment();


const mostrarcard = pokemons => {
    pokemons.forEach(pokemon => {
        let clone = document.getElementById("pokemon_card").content;
        templateCard.querySelector("h2").textContent = pokemon.name
        templateCard.querySelector("img").setAttribute("src", pokemon.img)
        templateCard.querySelector("span").textContent = pokemon.num
        // divicion para recuadros de los tipos
        templateCard.querySelector(".typepoke").textContent = pokemon.type[0]
        if (pokemon.type.length >= 1) {
            templateCard.querySelector(".secondpoke").textContent = pokemon.type[1]
        }else (pokemon.type.length < 2) 
        {
            templateCard.querySelector(".secondpoke").style.display = "none" + pokemon.type[1]
        }
          // cambio de color de la tarjeta segun tipo
        templateCard.querySelector("div .card").className = "card " + pokemon.type[0]
        const clone1 = clone.cloneNode(true)

        fragment.appendChild(clone1)
    });
    items.appendChild(fragment);
};







