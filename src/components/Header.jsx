import Scoreboard from "./Scoreboard";
import "../styles/header.css";

function Header({ pokemonList, score, highScore }) {
  return (
    <header className="header">
      <h1 className="heading">Pokémon: A Memory Game</h1>
      <Scoreboard
        pokemonList={pokemonList}
        score={score}
        highScore={highScore}
      />
    </header>
  );
}

export default Header;
