function Scoreboard({ score, highScore }) {
  return (
    <section className="scoreboard-section">
      <p className="score">Score: {score}</p>
      <p className="high-score">High Score: {highScore}</p>
    </section>
  );
}

export default Scoreboard;
