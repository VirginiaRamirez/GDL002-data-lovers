
//Data 
const pokeData = window.POKEMON.pokemon;
let root = document.getElementById("root");
/*  Función para crear un template literal
    o plantilla de cadena de texto para incrustar
    las propiedades de los objetos */

function showAllPokemons(pokemon) {
    /*  Retorna un div que contiene la imagen, número,
        nombre y tipo de Pokemon */    
        return `
        <section class="poke-box">
        <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
        <img class="poke-img" src="${pokemon.img}">
        <p id=poke-type>${pokemon.type.join("\u00A0\u00A0\u00A0\u00A0")}</span></p>
        <section class="wrap-text" id="text-footer">
            <class="poke-weight">Weight: <span id="weight"=>${pokemon.weight} </span><br> Height: <class="poke-height"><span id="height">${pokemon.height}</span><br>
            <class="poke-egg">Egg: <span id=egg>${pokemon.egg}</span><br>
            <class="candy">Candy: <span id=poke-candy>${pokemon.candy}</span><br>
            <class="candy-count">Candy count: <span id=poke-candy>${pokemon.candy_count}</span><br>
            <class="poke-weak">Weaknesses:<br> <span id="poke-we">${pokemon.weaknesses.join("\u00A0\u00A0")}</span><br>
            </section>
        </section>
        `;
    }


/*  Se manda a llamar al contenedor/div "" de html para depositar
    los template generados por la función pokeTemplate */
document.getElementById('root').innerHTML = `
    ${pokeData.map(showAllPokemons).join("")}
`;

//Selector
let typeSelector = document.getElementById("type-select");
let typeOptions = ["Grass", "Poison", "Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Bug", "Fighting", "Ghost", "Dragon", "Normal"];
typeOptions.forEach(optionType => {
    let options = document.createElement("option");
    options.textContent = optionType;
    options.id = optionType;
    options.value = optionType;
    typeSelector.appendChild(options);
});

const filterByType = document.getElementById("type-select");
filterByType.addEventListener("change", () => {
    let pokeType =filterByType.value;
    let filtered = window.dataLovers.pokeFilter(pokeData, pokeType);
    pokeTemplate(filtered);
});


const sortByName = document.getElementById("sort-by");
sortByName.addEventListener("change", () => {
    let sortBy = sortByName.value;
    let sorted = window.dataLovers.pokeSort(pokeData, sortBy);
    pokeTemplate(sorted);
});

function pokeTemplate (filtered){
    let result = "";
    root.innerHTML = '';
   filtered.forEach(pokemon => {
       result = root.innerHTML +=`
            <section| class="poke-box">
            <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
        <img class="poke-img" src="${pokemon.img}">
        <p id=poke-type>${pokemon.type.join("\u00A0\u00A0\u00A0\u00A0")}</span></p>
        <section class="wrap-text" id="text-footer">
            <class="poke-weight">Weight: <span id="weight"=>${pokemon.weight} </span><br> Height: <class="poke-height"><span id="height">${pokemon.height}</span><br>
            <class="poke-egg">Egg: <span id=egg>${pokemon.egg}</span><br>
            <class="candy">Candy: <span id=poke-candy>${pokemon.candy}</span><br>
            <class="candy-count">Candy count: <span id=poke-candy>${pokemon.candy_count}</span><br>
            <class="poke-weak">Weaknesses:<br> <span id="poke-we">${pokemon.weaknesses.join("\u00A0\u00A0")}</span><br>
            `;
     });
     return result;
}

  