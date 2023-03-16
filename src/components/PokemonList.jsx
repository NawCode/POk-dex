import PokemonCard from "./PokemondCard";

const PokemonList = (props) => {
  const { pokemons } = props;

  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <div>
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
          </div>
        );
      })}
    </>
  );
};

export default PokemonList;
