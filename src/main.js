import { filterType, filterRegion, filterOrder, filterOrderNum } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const progress_bar = document.getElementById("welcome");
setTimeout(function () {
    progress_bar.classList.add("close");
    const pokemons = data.pokemon;
    //console.table(pokemons);
    document.getElementById("images-pokemons").style.display = "flex";
    visivilityCard(pokemons);

}, 9000);

const visivilityCard = (pokemons) => {
    pokemons.forEach(poke => {
        let cardsPokemon = document.createElement("div");
        cardsPokemon.setAttribute("class", "cardsPokemon");
        cardsPokemon.setAttribute("id", `${poke.num}`);
        /*cardsPokemon.addEventListener("click", () => modalInformation(poke))
        document.getElementById("pokemons-pp").innerHTML = ""; 
    });*/
        /*modalInformation(poke));*/

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

document.getElementById("type-select").addEventListener("change", () => {
    const type_select = document.getElementById("type-select").value;
    document.getElementById("pokemons-pp").innerHTML = "";
    const pokemons = data.pokemon;
    const pokemonFilter = filterType(pokemons, type_select);
    visivilityCard(pokemonFilter);
});

document.getElementById("region-select").addEventListener("change", () => {
    const region_select = document.getElementById("region-select").value;
    document.getElementById("pokemons-pp").innerHTML = "";
    const pokemons = data.pokemon;
    const regionFilter = filterRegion(pokemons, region_select);
    visivilityCard(regionFilter);
});

document.getElementById("order-select").addEventListener("change", () => {
    const order_select = document.getElementById("order-select").value;
    document.getElementById("pokemons-pp").innerHTML = "";
    const pokemons = data.pokemon;

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


/*document.getElementById("pokemons-pp").addEventListener("click", () => {
    const modalInformation = document.getElementById("modalInformation");
    document.getElementById("pokemons-pp").innerHTML = "";
    const pokemons = data.pokemon;
    visivilityCard(modalInformation)

});*/

document.addEventListener('click', function (e) {
    const pokemons = data.pokemon;
    if (e.target.id == 'individualCardPokemon') {
        document.getElementById("pokemons-pp").innerHTML = data.pokemon[e.target.dataset.position].name;
        console.log(data.pokemon[e.target.dataset.position])

    }

    let informationCard = document.getElementById("modalInformation");

    const showModal = document.createElement("div");
    showModal.classList.add("showModal");
    showModal.setAttribute("id", `${e}`);
    showModal.setAttribute("hidden", "");
    informationCard.appendChild(showModal);

    let especificCardPokemon = document.createElement("div");
    especificCardPokemon.setAttribute("class", "especificCardPokemon");
    especificCardPokemon.setAttribute("id", "especificCardPokemon");

    let pokeImg = document.createElement("img");
    pokeImg.setAttribute("class", "pokeImg");
    pokeImg.setAttribute("src", `${e.img}`);

    let namePokemon = document.createElement("h2");
    namePokemon.setAttribute("class", "namePokemon");
    namePokemon.textContent = `${e.name}`;

    let numberPokemon = document.createElement("h3");
    numberPokemon.setAttribute("class", "numberPokemon");
    numberPokemon.textContent = `#${e.num}`;

    const windowA = document.createElement("div");
    windowA.classList.add("windowA");
    windowA.setAttribute("id", "bodyWindowA");

    let description = document.createElement("p");
    description.setAttribute("class", "description")
    description.textContent = `${e.about}`;

    let secondType = document.createElement("small");
    secondType.setAttribute("class", "secondType type");
    if (e.type[1] !== undefined) {
        secondType.textContent = `${e.type[1]}`;
    }
    let firstType = document.createElement("small");
    firstType.setAttribute("class", "firstType type");
    if (e.type[0] !== undefined) {
        firstType.textContent = `${e.type[0]}`;
    };

    let rarity = document.createElement("h2");
    rarity.setAttribute("class", "rarity");
    rarity.textContent = `${e.pokemon - rarity}`;

    let generation = document.createElement("h2");
    generation.setAttribute("class", "generation");
    generation.textContent = `${e.generation}`;

    let height = document.createElement("h2");
    height.setAttribute("class", "height");
    height.textContent = `${e.size}`;

    let weight = document.createElement("h2");
    weight.setAttribute("class", "weight");
    weight.textContent = `${e.size}`;

    showModal .appendChild(especificCardPokemon);
    especificCardPokemon.appendChild(pokeImg);
    especificCardPokemon.appendChild(namePokemon);
    especificCardPokemon.appendChild(numberPokemon);
    especificCardPokemon.appendChild(description);
    especificCardPokemon.appendChild(firstType);
    especificCardPokemon.appendChild(secondType);
    especificCardPokemon.appendChild(rarity);
    especificCardPokemon.appendChild(generation);
    especificCardPokemon.appendChild(height);
    especificCardPokemon.appendChild(weight);

    let showPoke = document.getElementById("modalInformation");
    showPoke.appendChild(showModal);


});

/*const modalInformation = (pokemons) => {
    pokemons.forEach(poke => {

        let informationCard = document.getElementById("modalInformation");

        const showModal = document.createElement("div");
        showModal.classList.add("showModal");
        showModal.setAttribute("id", `${poke}`);
        showModal.setAttribute("hidden", "");
        informationCard.appendChild(showModal);

        let cardsPokemon = document.createElement("div");
        cardsPokemon.setAttribute("class", "cardsPokemon");
        cardsPokemon.setAttribute("id", `${poke.num}`);

        let especificCardPokemon = document.createElement("div");
        especificCardPokemon.setAttribute("class", "especificCardPokemon");
        especificCardPokemon.setAttribute("id", "especificCardPokemon");


        let pokeImg = document.createElement("img");
        pokeImg.setAttribute("class", "pokeImg");
        pokeImg.setAttribute("src", `${poke.img}`);

        let namePokemon = document.createElement("h2");
        namePokemon.setAttribute("class", "namePokemon");
        namePokemon.textContent = `${poke.name}`;

        let numberPokemon = document.createElement("h3");
        numberPokemon.setAttribute("class", "numberPokemon");
        numberPokemon.textContent = `#${poke.num}`;


        const windowA = document.createElement("div");
        windowA.classList.add("windowA");
        windowA.setAttribute("id", "bodyWindowA");

        let description = document.createElement("p");
        description.setAttribute("class", "description")
        description.textContent = `${poke.about}`;

        let secondType = document.createElement("small");
        secondType.setAttribute("class", "secondType type");
        if (poke.type[1] !== undefined) {
            secondType.textContent = `${poke.type[1]}`;
        }
        let firstType = document.createElement("small");
        firstType.setAttribute("class", "firstType type");
        if (poke.type[0] !== undefined) {
            firstType.textContent = `${poke.type[0]}`;
        };

        let rarity = document.createElement("h2");
        rarity.setAttribute("class", "rarity");
        rarity.textContent = `${poke.pokemon - rarity}`;

        let generation = document.createElement("h2");
        generation.setAttribute("class", "generation");
        generation.textContent = `${poke.generation.num}`;

        let height = document.createElement("h2");
        height.setAttribute("class", "height");
        height.textContent = `${poke.size.height}`;

        let weight = document.createElement("h2");
        weight.setAttribute("class", "weight");
        weight.textContent = `${poke.size.weight}`;

        cardsPokemon.appendChild(especificCardPokemon);
        especificCardPokemon.appendChild(pokeImg);
        especificCardPokemon.appendChild(namePokemon);
        especificCardPokemon.appendChild(numberPokemon);
        especificCardPokemon.appendChild(firstType);
        especificCardPokemon.appendChild(secondType);

        let showPokemons = document.getElementById("modalInformation");
        showPokemons.appendChild(cardsPokemon);

    });

    modalInformation(pokemons)
};*/

/*const cleanCards = (poke) => {
  for(let poke of pokemons){
      let cardsPokemons = document.getElementById(`${poke.num}`);
      if (cardsPokemons !== null){
          cardsPokemons.remove()
      }

  }
}*/
