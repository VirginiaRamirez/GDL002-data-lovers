// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.dataLovers = {
  pokeFilter: (pokeData, pokeType) => {
      //console.log(pokeType)
      const filterByType = pokeData.filter(pokeData => pokeData.type.includes(pokeType));
      return filterByType;
  },

  pokeSort: (pokeData, sortBy) =>{
    if (sortBy == "a-Z"){
      return pokeData.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    }
    if (sortBy == "Z-a"){
      return pokeData.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
    }
    if (sortBy == "001-151"){
      return pokeData.sort((a, b) => (a.num > b.num ? 1 : b.num > a.num ? -1 : 0));
    }
    if (sortBy == "151-001"){
      return pokeData.sort((a, b) => (a.num > b.num ? -1 : b.num > a.num ? 1 : 0));
    }
  }

};

