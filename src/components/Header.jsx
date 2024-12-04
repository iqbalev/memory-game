import Scoreboard from "./Scoreboard";

function Header({ score, highScore }) {
  return (
    <header className="header">
      <h1 className="heading">Memory Game</h1>
      <Scoreboard score={score} highScore={highScore} />
    </header>
  );
}

export default Header;
