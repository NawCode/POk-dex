import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const [nextUrl, setNextUrl] = useState("");

  const MAX_POKEMON_COUNT = 1010;
  const PAGE_SIZE = 30;

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=0`
      );

      setNextUrl(res.data.next);

      const pokemonData = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const poke = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          return poke.data;
        })
      );
      setPokemons(pokemonData);
    };
    getPokemon();
  }, []);

  const nextPage = async () => {
    if (pokemons.length >= MAX_POKEMON_COUNT) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 800));

    let res = await axios.get(nextUrl);

    setNextUrl(res.data.next);

    const pokemonData = await Promise.all(
      res.data.results.map(async (pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        return poke.data;
      })
    );
    setPokemons((p) => [...p, ...pokemonData]);
  };

  const hasMorePokemonToLoad = pokemons.length < MAX_POKEMON_COUNT && nextUrl;

  const displayedPokemons = pokemons.slice(0, MAX_POKEMON_COUNT);

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-full">
        <h1 className="text-6xl font-extrabold mx-auto my-10">LISTE</h1>
      </div>
      <InfiniteScroll
        dataLength={displayedPokemons.length}
        next={nextPage}
        hasMore={hasMorePokemonToLoad}
        loader={
          <div className="w-full flex justify-center mb-4">
            <h4>Loading...</h4>
          </div>
        }
        endMessage={
          <div className="w-full flex justify-center mb-4">
            <p>No more Pokemon to load.</p>
          </div>
        }
      >
        <div className="grid grid-cols-5">
          <PokemonList pokemons={displayedPokemons} />
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
