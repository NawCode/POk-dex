import PokemonCard from "./PokemondCard";

const PokemonList = (props) => {
  const { pokemons } = props;

  return (
    <>
      {pokemons
        .sort((a, b) => a.id - b.id)
        .map((pokemon) => {
          const types = pokemon.types.map((type) => type.type.name);

          return (
            <div>
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.other["official-artwork"].front_default}
                frontSprite={pokemon.sprites.front_default}
                frontSpriteShiny={pokemon.sprites.front_shiny}
                backSprite={pokemon.sprites.back_default}
                backSpriteShiny={pokemon.sprites.back_shiny}
                type={pokemon.types[0].type.name}
                types={types}
              />
            </div>
          );
        })}
    </>
  );
};

export default PokemonList;
