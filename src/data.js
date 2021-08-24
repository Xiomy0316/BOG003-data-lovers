export const filterType = (pokemons, pokemonFilter) => {
  return pokemons.filter((poke) => (poke.type.includes(pokemonFilter)));
};

export const filterRegion = (pokemons, regionFilter) => {
  return pokemons.filter((poke) => (poke.generation.name.includes(regionFilter)));
};

export const filterOrder = (pokemons) => {
  return pokemons.sort(function (prev, next) {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
    return 0;
  });

};

export const filterOrderNum = (pokemons) => {
  return pokemons.sort(function (prev, next) {
    if (prev.num > next.num) {
      return 1;
    }
    if (prev.num < next.num) {
      return -1;
    }
    return 0;

  });

};

/*export const prom = (pokemons) => {
  return pokemons.map(function (poke) {
    const attack = poke.stats["base-attack"];
    //const defense = poke.stats["base-defense"];
    //let dateTotal = (attack + defense) / 2;
    //let datoCalculation = (((attack - dateTotal) ** 2 + (defense - dateTotal) ** 2) / 2);
    // poke["Total"] = dateTotal.toFixed(2);
    //poke["talculation"] = datoCalculation.toFixed();
  return attack;
  })
}*/

export const prom = (pokemons, key) => {
  const sumPoke = pokemons.reduce(0, pokemons.stats[key])
  return console.log(sumPoke);   
}


/*export const filterWeaknesses = (pokemons, weaknessesFilter) => {
return pokemons.filter((poke)=>(poke.weaknesses.includes(weaknessesFilter)));
};*/

/*export const cleanPokemon = function limpiar() {
  document.getElementById("type-select").reset();
}*/
