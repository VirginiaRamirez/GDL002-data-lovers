require('../src/data.js');
const pokemon = require('../src/data/pokemon/pokemon.json');
//const filterByTypeMock = require('../src/data/pokemon/filterByTypeMock.json');
// const sortDataMock  = require('../src/data/pokemon/sortDataMck.json');
// const computeStatsMock = require('../src/data/pokemon/computeStatsMock.json');



describe('pokemon',()=>{
  it('is an object',()=>{
    expect(typeof pokemon).toBe('object');
  });
});

describe('dataLovers',()=>{
  it('is an object',()=>{
    expect(typeof dataLovers).toBe('object');
  });
});

describe('pokeFilter()',()=>{
  it('is an function',()=>{
    expect(typeof dataLovers.pokeFilter).toBe('function');
  });
  it('debería retornar un arreglo al filtrar por tipo Grass', () => {
    expect(Array.isArray(dataLovers.pokeFilter(pokemon.pokemon,"Grass"))).toBe(true); 
  });
});
