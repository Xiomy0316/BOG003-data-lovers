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