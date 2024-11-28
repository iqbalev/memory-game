function Card({ pokemonList, onClick }) {
  return (
    <div className="card-container">
      {pokemonList.map((pokemon) => (
        <div
          className="card"
          key={pokemon.id}
          role="button"
          onClick={() => onClick(pokemon.id)}
        >
          <p className="pokemon-name">{pokemon.name}</p>
          <img src={pokemon.img} alt={`${pokemon.name}`} />
        </div>
      ))}
    </div>
  );
}

export default Card;
