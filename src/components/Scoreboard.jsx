import "../styles/scoreboard.css";

function Scoreboard({ pokemonList, score, highScore }) {
  return (
    <section className="scoreboard-section">
      <p className="score">
        Score: {score}/{pokemonList.length}
      </p>

      <p className="high-score">
        High Score | VE: {highScore["very easy"]} E: {highScore.easy} M:{" "}
        {highScore.medium} H: {highScore.hard}
      </p>
    </section>
  );
}

export default Scoreboard;
