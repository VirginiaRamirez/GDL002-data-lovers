const pantallaInicio =()=>{
    document.getElementById ("inicio").style.display="none";
    document.getElementById ("root").style.display="flex";
    document.getElementById ("header").style.display="flex";
    document.getElementById ("type-select").style.display="flex";
    document.getElementById ("sort-by").style.display="flex";
    document.getElementById ("imagenes").style.display="flex";
    
  };
  document.getElementById("botonInicio").addEventListener("click", pantallaInicio);

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
        <div class="poke-box">
            <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>
            <img class="poke-img" src="${pokemon.img}">
            <p id=poke-type>${pokemon.type.join(", ")}</span></p>
            <div class="wrap-text" id="text-footer">
                <class="poke-weight">Peso: <span id="att">${pokemon.weight}</span><br>
                <class="poke-height">Altura: <span id="att">${pokemon.height}</span><br>
                <class="poke-egg">Huevo: <span id="att">${pokemon.egg}</span><br>
                <class="poke-candy_count">Conteo de caramelos: <span id="att">${pokemon.candy_count}</span><br>
                <class="poke-candy">Caramelo: <span id="att">${pokemon.candy}</span><br>
                <class="poke-height">Posibilidad de engendro: <span id="att">${pokemon.spawn_chance}</span><br>
                
                <class="poke-height">Tiempo de engendro: <span id="att">${pokemon.spawn_time}</span><br>
                <class="poke-height">Multiplicadores: <span id="att">${pokemon.multipliers}</span><br>
                <class="poke-weak">Debilidades:<br> <span id="att">${pokemon.weaknesses.join(", ")}</span><br>
            </div>
        </div>
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
            <div class="poke-box">
            <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>
            <img class="poke-img" src="${pokemon.img}">
            <p id=poke-type>${pokemon.type.join(", ")}</span></p>
            <div class="wrap-text" id="text-footer">
                <class="poke-weight">Peso: <span id="att">${pokemon.weight}</span><br>
                <class="poke-height">Altura: <span id="att">${pokemon.height}</span><br>
                <class="poke-egg">Huevo: <span id="att">${pokemon.egg}</span><br>
                <class="poke-candy_count">Conteo de caramelos: <span id="att">${pokemon.candy_count}</span><br>
                <class="poke-candy">Caramelo: <span id="att">${pokemon.candy}</span><br>
                <class="poke-height">Posibilidad de engendro: <span id="att">${pokemon.spawn_chance}</span><br>
                <class="poke-height">Tiempo de engendro: <span id="att">${pokemon.spawn_time}</span><br>
                <class="poke-height">Multiplicadores: <span id="att">${pokemon.multipliers}</span><br>
                <class="poke-weak">Debilidades:<br> <span id="att">${pokemon.weaknesses.join(", ")}</span><br>
            `;
     });
     return result;
}

  