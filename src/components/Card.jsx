import PokemonBall from "../assets/PokemonBall.svg";
import "../styles/card.css";

function Card({ pokemonList, isFlipped, onClick }) {
  return (
    <div className="card-container">
      {pokemonList.map((pokemon) => (
        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          key={pokemon.id}
          role="button"
          onClick={() => onClick(pokemon.id)}
        >
          <div className="card-front-back">
            <div className="card-front">
              <p className="pokemon-name">{pokemon.name}</p>
              <img
                className="pokemon-img"
                src={pokemon.img}
                alt={`${pokemon.name}`}
              />
            </div>

            <div className="card-back">
              <img
                className="pokemon-ball"
                src={PokemonBall}
                alt="Pokemon Ball"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
