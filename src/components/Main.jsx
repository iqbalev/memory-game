import Card from "./Card";
import Difficulty from "./Difficulty";
import "../styles/main.css";

function Main({
  pokemonList,
  difficulty,
  changeDifficulty,
  isFlipped,
  onClick,
}) {
  return (
    <main className="main">
      <Difficulty difficulty={difficulty} changeDifficulty={changeDifficulty} />
      <Card pokemonList={pokemonList} isFlipped={isFlipped} onClick={onClick} />
    </main>
  );
}

export default Main;
