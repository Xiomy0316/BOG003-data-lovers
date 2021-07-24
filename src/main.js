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

window.onload = function() {
    animateprogress("bar",100);
}

function animateprogress (bar,value) { 
    let getRequestAnimationFrame = function () {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (){
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
         
    };

    let fpAnimationFrame = getRequestAnimationFrame(); 
    let i = 0;
    let animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(bar).setAttribute("value",i);  
            i++;
            fpAnimationFrame(animacion);
        }
    }

    fpAnimationFrame(animacion);
}

   /*let container = document.getElementById ("bar");

    container.style ="hidden"*/ 