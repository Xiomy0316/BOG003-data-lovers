import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

let progress_bar = document.getElementById ("welcome");
setTimeout (function() {
    progress_bar.classList.add ("close");
    document.getElementById("pokemons-pp").style.display = "block";
},9000);

const pokemons = data.pokemon;
console.table(pokemons);

const pokemons_pp = document.getElementById("pokemons-pp");
const templateCard = document.getElementById("templateCard").content;
const fragment = document.createDocumentFragment();

const visivilityCard = pokemons => {
    pokemons.forEach(poke => {
    templateCard.querySelector("img").setAttribute("src", poke.img)
    templateCard.querySelector("h1").textContent = poke.name
    templateCard.querySelector("h2").textContent = poke.num
    templateCard.querySelector("h3").textContent = poke.type
    const clone  = templateCard.cloneNode(true)

    fragment.appendChild(clone)
    });
    pokemons_pp.appendChild(fragment);
};
visivilityCard(pokemons);

/*const selectElement = document.querySelector('.nieve');

selectElement.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `Te gusta el sabor ${event.target.value}`;
});*/

/*const pokemons = [data.pokemon[i].num];
pokemons.forEach(myFunction)

document.getElementById("pokemons").innerHTML = pokemons;

function myFunction(i=0, i <num, i++) {
  arr[index] = item * 10;
}*/

/*console.log(data.pokemon[0].img);
const pokemons = document.getElementById("bulbasaur").src=data.pokemon[0].img;*/

/*console.log(data.pokemon[0].name);
const bulbasaur = document.getElementById("pokemons").innerHTML=data.pokemon[0].name;

console.log(data.pokemon[0].type);
const pokebulbasaur = document.getElementById("pokemons").innerHTML=data.pokemon[0].type;

console.log(data.pokemon[0].num);
const pobulbasaur = document.getElementById("pokemons").innerHTML=data.pokemon[0].num;*/

/*console.log(pokemons);
document.getElementById("pokemons").addEventListener("onload", function(event) {
    const pokemons =  data.pokemon[0].img;
    let mostrar = document.getElementById("pokemons").src = pokemons;
    document.getElementById("pokemons").img = mostrar;
});*/

/*var x = document.getElementById("myDIV");
x.addEventListener("webkitAnimationEnd", myEndFunction);

object.addEventListener("load", myScript);
object.onload = function(){myScript};*/

/*element.addEventListener()
innerHTML*/

/*document.getElementById("welcome").style.display = "none";
document.getElementById("pokemons").style.display = "block";*/