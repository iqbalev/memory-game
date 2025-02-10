import "../styles/modal.css";

export function ResultModal({ isWin, isResultModalOpen, closeResultModal }) {
  return (
    isResultModalOpen && (
      <div className="result-modal-container">
        <dialog open={isResultModalOpen} className="modal">
          <h3 className="result">
            {isWin
              ? "You win! Well played."
              : "You lose! Better luck next time."}
          </h3>
          <button type="button" onClick={closeResultModal}>
            Close
          </button>
        </dialog>
      </div>
    )
  );
}

export function LeaderboardModal({
  highScore,
  isLeaderboardModalOpen,
  closeLeaderboardModal,
}) {
  return (
    isLeaderboardModalOpen && (
      <div className="leaderboard-modal-container">
        <dialog open={isLeaderboardModalOpen} className="modal">
          <ul className="high-score-list">
            <li>Easy: {highScore.easy} </li>
            <li>Medium: {highScore.medium} </li>
            <li>Hard: {highScore.hard} </li>
            <li>Expert: {highScore.expert} </li>
          </ul>
          <button type="button" onClick={closeLeaderboardModal}>
            Close
          </button>
        </dialog>
      </div>
    )
  );
}

export function HowToPlayModal({ isHowToPlayModalOpen, closeHowToPlayModal }) {
  return (
    isHowToPlayModalOpen && (
      <div className="how-to-play-modal-container">
        <dialog open={isHowToPlayModalOpen} className="modal">
          <p className="rules">
            Do not click on the same card twice! Otherwise, you lose.
          </p>
          <button type="button" onClick={closeHowToPlayModal}>
            Close
          </button>
        </dialog>
      </div>
    )
  );
}
