import Card from "./Card";

function Main({ pokemonList, isFlipped, onClick }) {
  return (
    <main>
      <Card pokemonList={pokemonList} isFlipped={isFlipped} onClick={onClick} />
    </main>
  );
}

export default Main;
