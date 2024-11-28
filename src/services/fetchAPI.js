import capitalize from "../utils/capitalize";

async function fetchAPI() {
  const pokemonData = [];

  try {
    for (let i = 1; i <= 10; i++) {
      const id = i;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

      if (!response.ok) throw new Error(response.status);

      const result = await response.json();
      const pokemonId = result.id;
      const pokemonName = result.forms[0].name;
      const pokemonImg = result.sprites.front_default;

      pokemonData.push({
        id: pokemonId,
        name: capitalize(pokemonName),
        img: pokemonImg,
      });
    }
    return pokemonData;
  } catch (error) {
    console.error(`Response Status: ${error}.`);
  }
}

export default fetchAPI;
