import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const [nextUrl, setNextUrl] = useState("");

  const MAX_POKEMON_COUNT = 1010;
  const PAGE_SIZE = 50;

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mx-auto my-6 md:my-10 text-center">
          TOUS LES POKÉMON
        </h1>
      </div>
      <InfiniteScroll
        dataLength={displayedPokemons.length}
        next={nextPage}
        hasMore={hasMorePokemonToLoad}
        loader={
          <div className="w-full flex justify-center mb-8 font-bold">
            <h4>Chargement...</h4>
          </div>
        }
        endMessage={
          <div className="w-full flex justify-center mb-8 font-bold">
            <p>Plus de Pokémon à afficher</p>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <PokemonList pokemons={displayedPokemons} />
        </div>
      </InfiniteScroll>
      <button
        className="fixed bottom-24 right-8 p-4 rounded-full bg-red-600 text-white shadow-lg transition-all hover:scale-110 md:right-16 md:bottom-32"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <button
        className="fixed bottom-8 right-8 p-4 rounded-full bg-red-600 text-white shadow-lg transition-all hover:scale-110 md:right-16 md:bottom-16"
        onClick={scrollToBottom}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Home;
