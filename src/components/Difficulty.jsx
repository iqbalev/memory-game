import "../styles/difficulty.css";

function Difficulty({ difficulty, changeDifficulty }) {
  return (
    <section className="difficulty-section">
      <div className="heading-buttons">
        <h2 className="heading">Select Difficulty:</h2>
        <div className="buttons">
          <button
            className="button very-easy"
            onClick={() => changeDifficulty("very easy")}
          >
            Very Easy
          </button>
          <button
            className="button easy"
            onClick={() => changeDifficulty("easy")}
          >
            Easy
          </button>
          <button
            className="button medium"
            onClick={() => changeDifficulty("medium")}
          >
            Medium
          </button>
          <button
            className="button hard"
            onClick={() => changeDifficulty("hard")}
          >
            Hard
          </button>
        </div>
      </div>

      <p className="current-difficulty">
        Current Difficulty: <span>{difficulty}</span>
      </p>
    </section>
  );
}

export default Difficulty;
