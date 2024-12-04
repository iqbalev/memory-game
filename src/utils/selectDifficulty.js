function selectDifficulty(difficulty) {
  switch (difficulty) {
    case "very easy":
      return 5;
    case "easy":
      return 10;
    case "medium":
      return 15;
    case "hard":
      return 20;
    default:
      return 5;
  }
}

export default selectDifficulty;
