import Scoreboard from "./Scoreboard";
import "../styles/header.css";

function Header({
  pokemonList,
  difficulty,
  score,
  highScore,
  backToStartScreen,
}) {
  return (
    <header className="header">
      <h1 className="heading" role="button" onClick={backToStartScreen}>
        Pokémon: A Memory Game
      </h1>
      <Scoreboard
        pokemonList={pokemonList}
        difficulty={difficulty}
        score={score}
        highScore={highScore}
      />
    </header>
  );
}

export default Header;
