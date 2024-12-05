import "../styles/difficulty.css";

function Difficulty({ difficulty, changeDifficulty }) {
  return (
    <section className="difficulty-section">
      <div className="heading-buttons-active">
        <h2 className="heading">Select Difficulty:</h2>
        <div className="buttons-active">
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
          <p className="active-difficulty">
            Active: <span>{difficulty}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Difficulty;
