import { useState, useEffect } from "react";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [difficulty, setDifficulty] = useState("very easy");
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState({
    "very easy": 0,
    easy: 0,
    medium: 0,
    hard: 0,
  });

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      const pokemon = await fetchAPI(difficulty);
      setPokemonList(pokemon);
      shufflePokemonList();
      setIsLoading(false);
    }
    getPokemon();
  }, [difficulty]);

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

  function changeDifficulty(difficulty) {
    resetGame();
    setDifficulty(difficulty);
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

  function flipCard() {
    setIsFlipped(true);
  }

  function incrementScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function updateHighScore(score) {
    setHighScore((prevHighScore) => ({
      ...prevHighScore,
      [difficulty]: Math.max(prevHighScore[difficulty], score),
    }));
  }

  function resetGame() {
    setClickedPokemon([]);
    setScore(0);
  }

  function handleClick(pokemonId) {
    if (!clickedPokemon.includes(pokemonId)) {
      const clickedPokemonCopy = [...clickedPokemon, pokemonId];
      rememberClickedPokemon(pokemonId);
      incrementScore();
      const finalScore = score + 1;

      if (clickedPokemonCopy.length === pokemonList.length) {
        updateHighScore(finalScore);
        resetGame();
        console.log("You Win!");
      }
    } else {
      updateHighScore(score);
      resetGame();
      console.log("You Lose!");
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
          <Header
            pokemonList={pokemonList}
            score={score}
            highScore={highScore}
          />
          <Main
            pokemonList={pokemonList}
            difficulty={difficulty}
            changeDifficulty={changeDifficulty}
            isFlipped={isFlipped}
            onClick={handleClick}
          />
        </>
      )}
    </div>
  );
}

export default App;
