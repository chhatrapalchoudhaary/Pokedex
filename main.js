const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const fetchPokemons = async() => {
    for(let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}



const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    createPokemonCard(pokemon);
    
}

const createPokemonCard = pokemon => {
    console.log(pokemon)
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const { id, name, sprites, types,weight,height,base_experience } = pokemon;
    const type = types[0].type.name;
    
    const pokeInnerHTML = `
        <div class="img-container">
            <img class="sprate-main" src="${sprites.front_shiny}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
            <div class="information">
                <div class="indiviual-info">
                    <small class="type">Weight</small>
                    <small class="data">${weight}</small>
                </div>
                <div class="indiviual-info">
                    <small class="type">Height</small>
                    <small class="data">${height}</small>
                </div>
                <div class="indiviual-info">
                    <small class="type">Experience</small>
                    <small class="data">${base_experience}</small>
                </div>
            </div>
        </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}


fetchPokemons();
