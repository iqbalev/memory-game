import Card from "./Card";
import Difficulty from "./Difficulty";
import Modal from "./Modal";
import "../styles/main.css";

function Main({
  pokemonList,
  difficulty,
  changeDifficulty,
  isFlipped,
  onClick,
  isWin,
  showModal,
  closeModal,
}) {
  return (
    <main className="main">
      <Difficulty difficulty={difficulty} changeDifficulty={changeDifficulty} />
      <Card pokemonList={pokemonList} isFlipped={isFlipped} onClick={onClick} />
      <Modal isWin={isWin} showModal={showModal} closeModal={closeModal} />
    </main>
  );
}

export default Main;
