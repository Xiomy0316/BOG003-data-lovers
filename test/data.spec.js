/*import { filterType, filterRegion, filterOrder, filterOrderNum } from '../src/data.js';

let pokemonInitial =[{name: "pikachu", num:"025", generation: {name:"kanto"}, type:["electric"], size:{height: "0.41 m",
weight: "6.0 kg"}, stats: {"base-attack": "112", "base-defense": "96", "base-stamina":"111", "max-cp": "938", "max-hp":"99"}},{name: "sneasel", num:"215", generation: {name:"johto"}, type:["dark", "ice"], size:{height: "0.89 m",
weight: "28.0 kg"}, stats: {"base-attack": "189", "base-defense": "146", "base-stamina":"146", "max-cp": "2051", "max-hp":"127"}},{name: "entei", num:"244", generation: {name:"johto"}, type:["fire"], size:{height: "2.11 m",
weight: "198.0 kg"}, stats: {"base-attack": "235", "base-defense": "171", "base-stamina":"251", "max-cp": "3473", "max-hp":"210"}},{name: "bulbasaur", num:"001", generation: {name:"kanto"}, type:["grass", "poison"], size:{height: "0.71 m",
weight: "6.9 kg"}, stats: {"base-attack": "118", "base-defense": "111", "base-stamina":"128", "max-cp": "1115", "max-hp":"113"}}]

let pokemonType = [{name: "pikachu", num:"025", generation: {name:"kanto"}, type:["electric"], size:{height: "0.41 m",
weight: "6.0 kg"}, stats: {"base-attack": "112", "base-defense": "96", "base-stamina":"111", "max-cp": "938", "max-hp":"99"}}]


let pokemonKanto = [{name: "pikachu", num:"025", generation: {name:"kanto"}, type:["electric"], size:{height: "0.41 m",
weight: "6.0 kg"}, stats: {"base-attack": "112", "base-defense": "96", "base-stamina":"111", "max-cp": "938", "max-hp":"99"}},{name: "bulbasaur", num:"001", generation: {name:"kanto"}, type:["grass", "poison"], size:{height: "0.71 m",
weight: "6.9 kg"}, stats: {"base-attack": "118", "base-defense": "111", "base-stamina":"128", "max-cp": "1115", "max-hp":"113"}}]

let pokemonJohto = [{name: "sneasel", num:"215", generation: {name:"johto"}, type:["dark", "ice"], size:{height: "0.89 m",
weight: "28.0 kg"}, stats: {"base-attack": "189", "base-defense": "146", "base-stamina":"146", "max-cp": "2051", "max-hp":"127"}},{name: "entei", num:"244", generation: {name:"johto"}, type:["fire"], size:{height: "2.11 m",
weight: "198.0 kg"}, stats: {"base-attack": "235", "base-defense": "171", "base-stamina":"251", "max-cp": "3473", "max-hp":"210"}}]


let pokemonName =[{name: "bulbasaur", num:"001", generation: {name:"kanto"}, type:["grass", "poison"], size:{height: "0.71 m",
weight: "6.9 kg"}, stats: {"base-attack": "118", "base-defense": "111", "base-stamina":"128", "max-cp": "1115", "max-hp":"113"}},{name: "entei", num:"244", generation: {name:"johto"}, type:["fire"], size:{height: "2.11 m",
weight: "198.0 kg"}, stats: {"base-attack": "235", "base-defense": "171", "base-stamina":"251", "max-cp": "3473", "max-hp":"210"}},{name: "pikachu", num:"025", generation: {name:"kanto"}, type:["electric"], size:{height: "0.41 m",
weight: "6.0 kg"}, stats: {"base-attack": "112", "base-defense": "96", "base-stamina":"111", "max-cp": "938", "max-hp":"99"}},{name: "sneasel", num:"215", generation: {name:"johto"}, type:["dark", "ice"], size:{height: "0.89 m",
weight: "28.0 kg"}, stats: {"base-attack": "189", "base-defense": "146", "base-stamina":"146", "max-cp": "2051", "max-hp":"127"}}]

let pokemonNum =[{name: "bulbasaur", num:"001", generation: {name:"kanto"}, type:["grass", "poison"], size:{height: "0.71 m",
weight: "6.9 kg"}, stats: {"base-attack": "118", "base-defense": "111", "base-stamina":"128", "max-cp": "1115", "max-hp":"113"}},{name: "pikachu", num:"025", generation: {name:"kanto"}, type:["electric"], size:{height: "0.41 m",
weight: "6.0 kg"}, stats: {"base-attack": "112", "base-defense": "96", "base-stamina":"111", "max-cp": "938", "max-hp":"99"}},{name: "sneasel", num:"215", generation: {name:"johto"}, type:["dark", "ice"], size:{height: "0.89 m",
weight: "28.0 kg"}, stats: {"base-attack": "189", "base-defense": "146", "base-stamina":"146", "max-cp": "2051", "max-hp":"127"}},{name: "entei", num:"244", generation: {name:"johto"}, type:["fire"], size:{height: "2.11 m",
weight: "198.0 kg"}, stats: {"base-attack": "235", "base-defense": "171", "base-stamina":"251", "max-cp": "3473", "max-hp":"210"}}]



describe('filterType', () => {
  it(' filterType is a function', () => {
    expect(typeof filterType).toBe('function');
  });
  it('Deberia retornar a los Pkemons electricos', () => {
    expect(filterType(pokemonInitial, "electric")).toEqual(pokemonType);
  });
  
});

describe('filterRegion', () => {
  it(' filterRegion is a function', () => {
    expect(typeof filterRegion).toBe('function');
  });
  it('Deberia retornar a los Pkemons que pernecen a la region de  Kanto', () => {
    expect(filterRegion(pokemonInitial, "kanto")).toEqual(pokemonKanto);
  });
  it('Deberia retornar a los Pkemons que pernecen a la region de  johto', () => {
    expect(filterRegion(pokemonInitial, "johto")).toEqual(pokemonJohto);
  });

});

describe('filterOrder', () => {
  it(' filterOrder is a function', () => {
    expect(typeof filterRegion).toBe('function');
  });
  it('Deberia retornar a los Pkemons de la A a la Z', () => {
    expect(filterOrder(pokemonInitial, "name A-Z")).toEqual(pokemonName);
  });
  it('Deberia retornar a los Pkemons de la Z a la A', () => {
    expect(filterOrder(pokemonInitial, "name Z-A")).toEqual(pokemonName);
  });

});

describe('filterOrderNum', () => {
  it(' filterOrderNum is a function', () => {
    expect(typeof filterRegion).toBe('function');
  });
  it('Deberia retornar a los Pkemons de numero menor a mayor', () => {
    expect(filterOrderNum(pokemonInitial, "num inferior")).toEqual(pokemonNum);
  });
  it('Deberia retornar a los Pkemons de numero mayor a menor', () => {
    expect(filterOrderNum(pokemonInitial, "num superior")).toEqual(pokemonNum);
  });

});*/