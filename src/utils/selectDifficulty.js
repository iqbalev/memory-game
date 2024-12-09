function selectDifficulty(difficulty) {
  switch (difficulty) {
    case "easy":
      return 5;
    case "medium":
      return 10;
    case "hard":
      return 15;
    case "expert":
      return 20;
    default:
      return 10;
  }
}

export default selectDifficulty;
