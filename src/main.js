import { filterType, filterRegion, filterOrder, filterOrderNum } from './data.js';
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

    //Información constante modal
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

    //Botones para cambios de cara modal
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

    //Contenido por caras de tarjetas específicas modal
    const bodyA = document.createElement("div");
    bodyA.classList.add("bodyA");
    bodyA.setAttribute("hidden", "");
    bodyA.setAttribute("id", "modalBody");
    modal.appendChild(bodyA);

    let description = document.createElement("div");
    description.classList.add("description");
    bodyA.appendChild(description);
    description.textContent = poke.about;

    let secondType = document.createElement("small");
    secondType.setAttribute("class", "secondType type");
    if (poke.type[1] !== undefined) {
        secondType.textContent = `${poke.type[1]}`;
        bodyA.appendChild(secondType);
    }
    let firstType = document.createElement("small");
    firstType.setAttribute("class", "firstType type");
    if (poke.type[0] !== undefined) {
        firstType.textContent = `${poke.type[0]}`;
        bodyA.appendChild(firstType);
    }

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
    modal.appendChild(bodyB);

    const evolutions = document.createElement("div");
    evolutions.classList.add("evolutions");

    const pokePrevolucion = document.createElement("div");
    const prevolucionImg = document.createElement("img");


    pokePrevolucion.appendChild(prevolucionImg);

    const pokeEvolucion = document.createElement("div");
    const evolucionImg = document.createElement("img");


    pokeEvolucion.appendChild(evolucionImg);

    evolutions.appendChild(pokePrevolucion);
    evolutions.appendChild(pokeEvolucion);

    if ("prev-evolution" in poke.evolution) {
        const txtPrevolucion = document.createElement("h3");
        txtPrevolucion.textContent = "Pre-evolution";
        pokePrevolucion.insertBefore(txtPrevolucion, prevolucionImg);
        const Prevoluciones = poke.evolution["prev-evolution"][0]["num"];
        prevolucionImg.src = "https://www.serebii.net/pokemongo/pokemon/" + Prevoluciones + ".png";
        prevolucionImg.classList.add("prevolutionImg");


    }
    if ("next-evolution" in poke.evolution) {
        const txtEvolucion = document.createElement("h3");
        txtEvolucion.textContent = "Next-evolution";
        pokeEvolucion.insertBefore(txtEvolucion, evolucionImg);
        const Evoluciones = poke.evolution["next-evolution"][0]["num"];

        evolucionImg.src = "https://www.serebii.net/pokemongo/pokemon/" + Evoluciones + ".png";
        evolucionImg.classList.add("evolutionImg");
    }

    bodyB.appendChild(evolutions);

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
    average.textContent = "Average:" + Math.round((parseInt(poke.stats["base-attack"]) + parseInt(poke.stats["base-defense"]) + parseInt(poke.stats["base-stamina"])) / 3);
    estadisticPoke.appendChild(average);

    const bodyD = document.createElement("div");
    bodyD.classList.add("bodyD");
    bodyD.setAttribute("hidden", "");
    bodyD.setAttribute("id", "modalD");
    modal.appendChild(bodyD);

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Quick-move:";
    bodyD.appendChild(title);

    let quickMoveA = document.createElement("div");
    quickMoveA.classList.add("quickMoveA");
    quickMoveA.textContent = "Name:" + poke["quick-move"][0]["name"];
    bodyD.appendChild(quickMoveA);

    let quickMoveB = document.createElement("div");
    quickMoveB.classList.add("quickMoveB");
    quickMoveB.textContent = "Base-damage:" + poke["quick-move"][0]["base-damage"];
    bodyD.appendChild(quickMoveB);

    const titleAttack = document.createElement("div");
    titleAttack.classList.add("titleAttack");
    titleAttack.textContent = "Special-attack:";
    bodyD.appendChild(titleAttack);

    let specialAttackA = document.createElement("div");
    specialAttackA.classList.add("specialAttackA");
    specialAttackA.textContent = "Name:" + poke["special-attack"][0]["name"];
    bodyD.appendChild(specialAttackA);

    let specialAttackB = document.createElement("div");
    specialAttackB.classList.add("specialAttackB");
    specialAttackB.textContent = "Base-damage:" + poke["special-attack"][0]["base-damage"];
    bodyD.appendChild(specialAttackB);

    //Funcionalidad botones ventanas modal
    btnWindowA.addEventListener("click", () => {
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