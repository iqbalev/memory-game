function capitalize(text) {
  const capitalizedText = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return capitalizedText;
}

export default capitalize;
