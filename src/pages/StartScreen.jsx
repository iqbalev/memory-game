import { HowToPlayModal, LeaderboardModal } from "../components/Modal";
import "../styles/start-screen.css";

function StartScreen({
  changeDifficulty,
  highScore,
  isLeaderboardModalOpen,
  showLeaderboardModal,
  closeLeaderboardModal,
  isHowToPlayModalOpen,
  showHowToPlayModal,
  closeHowToPlayModal,
}) {
  return (
    <div className="start-screen">
      <div className="difficulty-buttons">
        <button className="btn easy" onClick={() => changeDifficulty("easy")}>
          Easy
        </button>
        <button
          className="btn medium"
          onClick={() => changeDifficulty("medium")}
        >
          Medium
        </button>
        <button className="btn hard" onClick={() => changeDifficulty("hard")}>
          Hard
        </button>
        <button
          className="btn expert"
          onClick={() => changeDifficulty("expert")}
        >
          Expert
        </button>
      </div>

      <button className="btn leaderboard" onClick={showLeaderboardModal}>
        Leaderboard
      </button>

      <button className="btn how-to-play" onClick={showHowToPlayModal}>
        How to Play
      </button>

      <LeaderboardModal
        highScore={highScore}
        isLeaderboardModalOpen={isLeaderboardModalOpen}
        closeLeaderboardModal={closeLeaderboardModal}
      />

      <HowToPlayModal
        isHowToPlayModalOpen={isHowToPlayModalOpen}
        closeHowToPlayModal={closeHowToPlayModal}
      />
    </div>
  );
}

export default StartScreen;
