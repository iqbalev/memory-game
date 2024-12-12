import Header from "../components/Header";
import Main from "../components/Main";

function GameScreen({
  pokemonList,
  difficulty,
  score,
  highScore,
  isFlipped,
  handleClick,
  isWin,
  isResultModalOpen,
  closeResultModal,
  backToStartScreen,
}) {
  return (
    <>
      <Header
        pokemonList={pokemonList}
        difficulty={difficulty}
        score={score}
        highScore={highScore}
        backToStartScreen={backToStartScreen}
      />
      <Main
        pokemonList={pokemonList}
        isFlipped={isFlipped}
        onClick={handleClick}
        isWin={isWin}
        isResultModalOpen={isResultModalOpen}
        closeResultModal={closeResultModal}
      />
    </>
  );
}

export default GameScreen;
