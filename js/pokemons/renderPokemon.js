import featchPokemon from "./featchPokemon.js";

const renderPokemon = async (pokemon) => {
    const data = await featchPokemon(pokemon);
    console.log(data);
}

export default renderPokemon;