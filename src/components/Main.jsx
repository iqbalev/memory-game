import Card from "./Card";

function Main({ pokemonList, onClick }) {
  return (
    <main>
      <Card pokemonList={pokemonList} onClick={onClick} />
    </main>
  );
}

export default Main;
