import Navbar from "../components/Navbar";

import axios from "axios";

import { useEffect, useState } from "react";
import PokemonCollection from "../components/PokemonCollection";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );

      setNextUrl(res.data.next);

      res.data.results.forEach(async (pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  const nextPage = async () => {
    let res = await axios.get(nextUrl);

    setNextUrl(res.data.next);

    res.data.results.forEach(async (pokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      setPokemons((p) => [...p, poke.data]);
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Accueil Pokédex</h1>
      <div className="justify-center grid grid-cols-4">
        <PokemonCollection pokemons={pokemons} />
        <div className="justify-center">
          <button
            onClick={nextPage}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Charger
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
