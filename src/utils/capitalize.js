function capitalize(text) {
  const capitalizedText =
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return capitalizedText;
}

export default capitalize;
