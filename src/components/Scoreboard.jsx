import "../styles/scoreboard.css";

function Scoreboard({ pokemonList, difficulty, score, highScore }) {
  return (
    <section className="scoreboard-section">
      <p className="score">
        Score: {score}/{pokemonList.length}
      </p>
      <p className="high-score">High Score: {highScore[difficulty]}</p>
    </section>
  );
}

export default Scoreboard;
