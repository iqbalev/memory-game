import { useState, useEffect } from "react";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      const pokemon = await fetchAPI();
      setPokemonList(pokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, []);

  useEffect(() => {
    if (isFlipped) {
      const flipTimeout = setTimeout(() => {
        setIsFlipped(false);
      }, 500);

      return () => clearTimeout(flipTimeout);
    }
  }, [isFlipped]);

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

  function flipCard() {
    setIsFlipped(true);
  }

  function resetGame() {
    setClickedPokemon([]);
    setScore(0);
  }

  function handleClick(pokemonId) {
    if (!clickedPokemon.includes(pokemonId)) {
      rememberClickedPokemon(pokemonId);
      incrementScore();
    } else {
      updateHighScore();
      resetGame();
    }
    shufflePokemonList();
    flipCard();
  }

  return (
    <div className="app-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header score={score} highScore={highScore} />
          <Main
            pokemonList={pokemonList}
            isFlipped={isFlipped}
            onClick={handleClick}
          />
        </>
      )}
    </div>
  );
}

export default App;
