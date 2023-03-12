const PokemonList = (props) => {
  const { name, id, image, type } = props;

  const pokeName = name.toUpperCase();
  const pokeId = "#" + ("000" + id).slice(-4);

  return (
    <div>
      <div class="relative group p-1">
        <div
          class={`${type} absolute inset-6 rounded-3xl blur opacity-20 group-hover:opacity-100 duration-700 group-hover:scale-110`}
        ></div>
        <div
          className={`${type} relative font-semibold text-center rounded-2xl shadow-lg p-10 max-w-xs m-8 border-black border cursor-pointer group-hover: opacity-100 group-hover:scale-110 duration-700`}
        >
          <img
            className="bg-white mb-4 w-24 h-24 rounded-full border shadow-lg mx-auto"
            src={image}
            alt="pokemon sprite"
          />
          <p className="text-2xl text-white">{pokeName}</p>
          <p className="text-2xl text-white mt-2">{pokeId}</p>
          <button className="bg-white px-8 py-2 mt-8 rounded-3xl text-black font-semibold uppercase border-black border-2 tracking-wide hover:bg-black hover:text-white hover:border-white duration-300">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
