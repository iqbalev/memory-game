import Card from "./Card";
import { ResultModal } from "../components/Modal";

import "../styles/main.css";

function Main({
  pokemonList,
  isFlipped,
  onClick,
  isWin,
  isResultModalOpen,
  closeResultModal,
}) {
  return (
    <main className="main">
      <Card pokemonList={pokemonList} isFlipped={isFlipped} onClick={onClick} />
      <ResultModal
        isWin={isWin}
        isResultModalOpen={isResultModalOpen}
        closeResultModal={closeResultModal}
      />
    </main>
  );
}

export default Main;
