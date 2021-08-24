import { filterType, filterRegion, filterOrder, filterOrderNum, prom } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Llamado global de la data
const pokemons = data.pokemon;

//Función de carga
const progress_bar = document.getElementById("welcome");
setTimeout(function () {
    progress_bar.classList.add("close");
    document.getElementById("images-pokemons").style.display = "flex";
    visivilityCard(pokemons);
}, 9000);

//Creación de las tarjetas generales
const visivilityCard = (pokemons) => {
    pokemons.forEach(poke => {
        let cardsPokemon = document.createElement("div");
        cardsPokemon.setAttribute("class", "cardsPokemon");
        cardsPokemon.setAttribute("id", `${poke.num}`);
        cardsPokemon.addEventListener("click", (e) => modalInformation(poke, e))

        let individualCardPokemon = document.createElement("div");
        individualCardPokemon.setAttribute("class", "individualCardPokemon");
        individualCardPokemon.setAttribute("id", "individualCardPokemon");

        let pokeImg = document.createElement("img");
        pokeImg.setAttribute("class", "pokeImg");
        pokeImg.setAttribute("src", `${poke.img}`);

        let namePokemon = document.createElement("h2");
        namePokemon.setAttribute("class", "namePokemon")
        namePokemon.textContent = `${poke.name}`;

        let numberPokemon = document.createElement("h3");
        numberPokemon.setAttribute("class", "numberPokemon");
        numberPokemon.textContent = `#${poke.num}`;


        let secondType = document.createElement("small");
        secondType.setAttribute("class", "secondType type");
        if (poke.type[1] !== undefined) {
            secondType.textContent = `${poke.type[1]}`;
        }

        let firstType = document.createElement("small");
        firstType.setAttribute("class", "firstType type");
        if (poke.type[0] !== undefined) {
            firstType.textContent = `${poke.type[0]}`;
        }

        if (poke.type[0] === "fire") {
            individualCardPokemon.classList.add("fire");
        } else if (poke.type[0] === "water") {
            individualCardPokemon.classList.add("water");
        } else if (poke.type[0] === "bug") {
            individualCardPokemon.classList.add("bug");
        } else if (poke.type[0] === "ice") {
            individualCardPokemon.classList.add("ice");
        } else if (poke.type[0] === "grass") {
            individualCardPokemon.classList.add("grass");
        } else if (poke.type[0] === "electric") {
            individualCardPokemon.classList.add("electric");
        } else if (poke.type[0] === "ground") {
            individualCardPokemon.classList.add("ground");
        } else if (poke.type[0] === "rock") {
            individualCardPokemon.classList.add("rock");
        } else if (poke.type[0] === "fairy") {
            individualCardPokemon.classList.add("fairy");
        } else if (poke.type[0] === "poison") {
            individualCardPokemon.classList.add("poison");
        } else if (poke.type[0] === "dragon") {
            individualCardPokemon.classList.add("dragon");
        } else if (poke.type[0] === "psychic") {
            individualCardPokemon.classList.add("psychic");
        } else if (poke.type[0] === "flying") {
            individualCardPokemon.classList.add("flying");
        } else if (poke.type[0] === "fighting") {
            individualCardPokemon.classList.add("fighting");
        } else if (poke.type[0] === "normal") {
            individualCardPokemon.classList.add("normal");
        } else if (poke.type[0] === "steel") {
            individualCardPokemon.classList.add("steel");
        } else if (poke.type[0] === "ghost") {
            individualCardPokemon.classList.add("ghost")
        } else if (poke.type[0] === "dark") {
            individualCardPokemon.classList.add("dark")
        }

        cardsPokemon.appendChild(individualCardPokemon);
        individualCardPokemon.appendChild(pokeImg);
        individualCardPokemon.appendChild(namePokemon);
        individualCardPokemon.appendChild(numberPokemon);
        individualCardPokemon.appendChild(firstType);
        individualCardPokemon.appendChild(secondType);
        individualCardPokemon.setAttribute("data-position", parseInt(`${poke.num}`) - 1)

        let showPokemons = document.getElementById("pokemons-pp");
        showPokemons.appendChild(cardsPokemon);

    });

};

//Tarjetas específicas modal
const modalInformation = (poke) => {

    let modal = document.querySelector(".modal");
    let modalC = document.querySelector(".espesific-information");
    modalC.style.visibility = "visible";
    modal.classList.toggle("card-information");


    const close = document.createElement("div");
    close.classList.add("close-btn");
    close.innerHTML = `<img src="images/close.png" class="imgClose"> `;
    modal.appendChild(close);


    close.addEventListener("click", () => {
        console.log("cerrar", close);
        modalC.style.visibility = "hidden";
        modal.classList.toggle("card-information");
        document.getElementById("modalInformation").innerHTML = "";
    })

    document.addEventListener("click", function (e) {
        if (e.target === modalC) {
            modal.classList.toggle("card-information");
            document.getElementById("modalInformation").innerHTML = "";

            setTimeout(function () {
                modalC.style.visibility = "hidden";
            }, 300)
        }
    })

    const upper = document.createElement("div");
    upper.classList.add("upper");
    modal.appendChild(upper);

    let namePoke = document.createElement("h2");
    namePoke.setAttribute("class", "namePoke");
    namePoke.textContent = `${poke.name}`;
    upper.appendChild(namePoke);

    let numberPokemon = document.createElement("h3");
    numberPokemon.setAttribute("class", "numberPoke");
    numberPokemon.textContent = `#${poke.num}`;
    upper.appendChild(numberPokemon);

    let pokeImg = document.createElement("img");
    pokeImg.setAttribute("class", "pokemonImg");
    pokeImg.setAttribute("src", `${poke.img}`);
    upper.appendChild(pokeImg);

    const btnWindowA = document.createElement("button");
    btnWindowA.classList.add("btnWindowA");
    btnWindowA.innerText = "Description";
    upper.appendChild(btnWindowA);

    const btnWindowB = document.createElement("button");
    btnWindowB.classList.add("btnWindowB");
    btnWindowB.innerText = "Evolutions";
    upper.appendChild(btnWindowB);

    const btnWindowC = document.createElement("button");
    btnWindowC.classList.add("btnWindowC");
    btnWindowC.innerText = "Stats";
    upper.appendChild(btnWindowC);

    const btnWindowD = document.createElement("button");
    btnWindowD.classList.add("btnWindowD");
    btnWindowD.innerText = "Attacks and Movements";
    upper.appendChild(btnWindowD);

    const bodyA = document.createElement("div");
    bodyA.classList.add("bodyA");
    bodyA.setAttribute("hidden", "");
    bodyA.setAttribute("id", "modalBody");
    upper.appendChild(bodyA);

    let description = document.createElement("div");
    description.classList.add("description");
    bodyA.appendChild(description);
    description.textContent = poke.about;

    let secondType = document.createElement("small");
    secondType.setAttribute("class", "secondType type");
    if (poke.type[1] !== undefined) {
        secondType.textContent =`${poke.type[1]}`;
        bodyA.appendChild(secondType);
    }
    let firstType = document.createElement("small");
    firstType.setAttribute("class", "firstType type");
    if (poke.type[0] !== undefined) {
        firstType.textContent = `${poke.type[0]}`;
        bodyA.appendChild(firstType);
    };

    let rarity = document.createElement("div");
    rarity.classList.add("rarity");
    rarity.textContent = "Rarity:" + `${poke["pokemon-rarity"]}`;
    bodyA.appendChild(rarity);

    let generation = document.createElement("div");
    generation.classList.add("generation");
    generation.textContent = "Generation:" + `${poke.generation.num}`;
    bodyA.appendChild(generation);

    let height = document.createElement("div");
    height.classList.add("height");
    height.textContent = "Height:" + `${poke.size.height}`;
    bodyA.appendChild(height);

    let weight = document.createElement("div");
    weight.classList.add("weight");
    weight.textContent = "Weight:" + `${poke.size.weight}`;
    bodyA.appendChild(weight);

    const bodyB = document.createElement("div");
    bodyB.classList.add("bodyB");
    bodyB.setAttribute("hidden", "");
    bodyB.setAttribute("id", "modalBody");
    upper.appendChild(bodyB);

    let egg = document.createElement("div");
    egg.classList.add("egg");
    egg.textContent = `${poke.egg}`;
    bodyB.appendChild(egg);

    /*let distance = document.createElement("div");
    distance.classList.add("distance");
    bodyB.appendChild(distance);
    if(poke["buddy-distance"] === undefined) {
        distance.textContent = `${poke["buddy-distance"]}`;
    }*/

    let evolutionCandy = document.createElement("div");
    evolutionCandy.classList.add("evolutionCandy");
    evolutionCandy.textContent = `${poke.evolution.candy}`;
    bodyB.appendChild(evolutionCandy);

    /*let prevEvolution = document.createElement("div");
    prevEvolution.classList.add("prevEvolution");
    if (poke.evolution !== undefined) {
    prevEvolution.textContent = `${poke.evolution["prev-evolution"]}`;
    bodyB.appendChild(prevEvolution);
    }

    let nextEvolution = document.createElement("div");
    nextEvolution.classList.add("nextEvolution");
    nextEvolution.textContent = `${poke.evolution["next-evolution"]}`;
    bodyB.appendChild(nextEvolution);*/

    const bodyC = document.createElement("div");
    bodyC.classList.add("bodyC");
    bodyC.setAttribute("hidden", "");
    bodyC.setAttribute("id", "modalC");
    modal.appendChild(bodyC);

    const estadisticPoke = document.createElement("div");
    estadisticPoke.classList.add("estadisticPoke");
    bodyC.appendChild(estadisticPoke);
    modal.appendChild(bodyC);

    const attackPoke = document.createElement("div");
    attackPoke.textContent = "Attack:" + poke.stats["base-attack"];
    estadisticPoke.appendChild(attackPoke);

    const defense = document.createElement("div");
    defense.textContent = "Defense:" + poke.stats["base-defense"];
    estadisticPoke.appendChild(defense);

    const stamina = document.createElement("div");
    stamina.textContent = "Stamina:" + poke.stats["base-stamina"];
    estadisticPoke.appendChild(stamina);

    const cpMax = document.createElement("div");
    cpMax.textContent = "Max-CP:" + poke.stats["max-cp"];
    estadisticPoke.appendChild(cpMax);

    const hpMax = document.createElement("div");
    hpMax.textContent = "Max-HP:" + poke.stats["max-hp"];
    estadisticPoke.appendChild(hpMax);

    const average = document.createElement("div");
    average.textContent = "Average:" + Math.round((parseInt(poke.stats["base-attack"]) + parseInt(poke.stats["base-defense"]) + parseInt(poke.stats["base-stamina"]) ) / 3);
    estadisticPoke.appendChild(average);

    const bodyD = document.createElement("div");
    bodyD.classList.add("bodyD");
    bodyD.setAttribute("hidden", "");
    bodyD.setAttribute("id", "modalD");
    modal.appendChild(bodyD);

    let quickMove = document.createElement("div");
    quickMove.classList.add("quickMove");
    quickMove.textContent = "Name:" + poke["quick-move"][0]["name"] + "Base-damage:" + poke["quick-move"][0]["base-damage"];
    ;
    bodyD.appendChild(quickMove);

//Botones ventanas modal
    btnWindowA.addEventListener("click", () => {
        console.log(document.querySelector(".bodyB"));
        document.querySelector(".bodyA").style.display = "block";
        document.querySelector(".bodyB").style.display = "none";
        document.querySelector(".bodyC").style.display = "none";
        document.querySelector(".bodyD").style.display = "none";
    })

    btnWindowB.addEventListener("click", () => {
        document.querySelector(".bodyA").style.display = "none";
        document.querySelector(".bodyB").style.display = "block";
        document.querySelector(".bodyC").style.display = "none";
        document.querySelector(".bodyD").style.display = "none";
    })

    btnWindowC.addEventListener("click", () => {
        document.querySelector(".bodyA").style.display = "none";
        document.querySelector(".bodyB").style.display = "none";
        document.querySelector(".bodyC").style.display = "block";
        document.querySelector(".bodyD").style.display = "none";
    })

    btnWindowD.addEventListener("click", () => {
        document.querySelector(".bodyA").style.display = "none";
        document.querySelector(".bodyB").style.display = "none";
        document.querySelector(".bodyC").style.display = "none";
        document.querySelector(".bodyD").style.display = "block";
    })
    
    

    /*export const prom = (pokemons) => {

        let bases = pokemons.map(function (poke) {
          poke.average = Math.round((parseInt(poke.stats["base-attack"]) + parseInt(poke.stats["base-defense"]) + parseInt(poke.stats["base-stamina"]) ) / 3);
          return poke
          
        })
        
        return bases;*/
      

    /*document.getElementById("stadisticsPower").addEventListener("click", () => {
        document.getElementById("pokemons-pp").innerHTML = "";
        const attack = calculation(pokemons);
        console.log(attack);
        //visivilityCard(attack);
    });*/
}
//Filtros
document.getElementById("type-select").addEventListener("change", () => {
    const type_select = document.getElementById("type-select").value;
    document.getElementById("pokemons-pp").innerHTML = "";
    const pokemonFilter = filterType(pokemons, type_select);
    visivilityCard(pokemonFilter);
});

document.getElementById("region-select").addEventListener("change", () => {
    const region_select = document.getElementById("region-select").value;
    document.getElementById("pokemons-pp").innerHTML = "";
    const regionFilter = filterRegion(pokemons, region_select);
    visivilityCard(regionFilter);
});

document.getElementById("order-select").addEventListener("change", () => {
    const order_select = document.getElementById("order-select").value;
    document.getElementById("pokemons-pp").innerHTML = "";

    if (order_select === "A-Z") {
        visivilityCard(filterOrder(pokemons))
    } else if (order_select === "Z-A") {
        visivilityCard(filterOrder(pokemons).reverse())
    } else if (order_select === "numberSup-numberInf") {
        visivilityCard(filterOrderNum(pokemons))
    } else if (order_select === "numberInf-numberSup") {
        visivilityCard(filterOrderNum(pokemons).reverse())
    }

});

/*function sumStadistics()  {

    const attack = document.getElementById("stadisticsPower");
    attack.innerHTML = prom(pokemons, "base-attack");

    const defense = document.getElementById("stadisticsDefense");
    defense.innerHTML = prom(pokemons, "base-defense");;

    const stamina = document.getElementById("stadisticsStamina");
    stamina.innerHTML = prom(pokemons, "base-stamina");

}*/

/*document.getElementById("stadisticsButton").addEventListener("click", () => {
    console.log("hola")
    //const stadistics = document.getElementById("stadisticsPower");
    document.getElementById("pokemons-pp").innerHTML = "";
    sumStadistics()
    //console.log(attack);
    //visivilityCard(attack);
});*/

/*document.getElementById("stadisticsPower").addEventListener("click", () => {
    document.getElementById("pokemons-pp").innerHTML = "";
    const attack = prom(pokemons);
    console.log(attack);
    visivilityCard(attack);

});*/
//-----------------------------------------------------------------------------
