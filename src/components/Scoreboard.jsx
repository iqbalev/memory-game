import "../styles/scoreboard.css";

function Scoreboard({ pokemonList, score, highScore }) {
  return (
    <section className="scoreboard-section">
      <p className="score">
        Score: {score}/{pokemonList.length}
      </p>

      <p className="high-score">
        High Score: Very Easy - {highScore["very easy"]} | Easy -{" "}
        {highScore.easy} | Medium - {highScore.medium} | Hard - {highScore.hard}
      </p>
    </section>
  );
}

export default Scoreboard;
