function capitalize(text) {
  const capitalizedText = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  //   text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return capitalizedText;
}

export default capitalize;
