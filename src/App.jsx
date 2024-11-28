import { useState, useEffect } from "react";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await fetchAPI();
      setPokemonList(pokemon);
    }
    getPokemon();
  }, []);

  function getShuffledPokemon(pokemonList) {
    const pokemonListCopy = [...pokemonList];
    for (let i = pokemonListCopy.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pokemonListCopy[i], pokemonListCopy[j]] = [
        pokemonListCopy[j],
        pokemonListCopy[i],
      ];
    }
    return pokemonListCopy;
  }

  function shufflePokemonList() {
    setPokemonList((prevPokemonList) => getShuffledPokemon(prevPokemonList));
  }

  function rememberClickedPokemon(pokemonId) {
    setClickedPokemon((prevClickedPokemon) => [
      ...prevClickedPokemon,
      pokemonId,
    ]);
  }

  function incrementScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function updateHighScore() {
    setHighScore((prevHighScore) => Math.max(prevHighScore, score));
  }

  function resetGame() {
    setClickedPokemon([]);
    updateHighScore();
    setScore(0);
  }

  function handleClick(pokemonId) {
    if (!clickedPokemon.includes(pokemonId)) {
      rememberClickedPokemon(pokemonId);
      incrementScore();
    } else {
      resetGame();
    }
    shufflePokemonList();
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Main pokemonList={pokemonList} onClick={handleClick} />
    </>
  );
}

export default App;
