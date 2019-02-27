//Data 
const pokeData = window.POKEMON.pokemon;

/*  Función para crear un template literal
    o plantilla de cadena de texto para incrustar
    las propiedades de los objetos */
function pokeTemplate(pokemon) {
    /*  Retorna un div que contiene la imagen, número,
        nombre y tipo de Pokemon */
        
    return `
    <div class="poke-box">
        <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
        <img class="poke-img" src="${pokemon.img}">
        <p id=poke-type>${pokemon.type.join(", ")}</span></p>
        <div class="wrap-text" id="text-footer">
            <p class="poke-weight">Peso: <span id="att">${pokemon.weight}</span></p>
            <p class="poke-height">Altura: <span id="att">${pokemon.height}</span></p>
            <p class="poke-egg">Huevo: <span id="att">${pokemon.egg}</span></p>
            <p class="poke-weak">Debilidades:<br> <span id="att">${pokemon.weaknesses.join(", ")}</span></p>
        </div>
    </div>
    `;
}
/*  Se manda a llamar al contenedor/div "" de html para depositar
    los template generados por la función pokeTemplate */
document.getElementById('root').innerHTML = `
    ${pokeData.map(pokeTemplate).join("")}
`;
//Selector
let typeSelector = document.getElementById("type-select");
let typeButtons = ["Grass", "Poison", "Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Bug", "Fighting", "Fairy", "Ghost", "Dark", "Steel", "Dragon", "Normal"];

typeButtons.forEach(buttonType => {
    let options = document.createElement("option");
    options.textContent = buttonType;
    options.id = buttonType;
    options.value = buttonType;
    typeSelector.appendChild(options);
});

let select = document.getElementById("type-select");
select.addEventListener('change', window.pokeLovers.pokeFilter(POKEMON.pokemon, pokeType.value));

