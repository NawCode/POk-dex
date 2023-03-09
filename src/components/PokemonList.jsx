const PokemonList = (props) => {
  const { name, id, image, type } = props;

  return (
    <div>
      <div>
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8">
          <img
            className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
            src={image}
            alt="player photo"
          />
          <h1 className="text-lg text-gray-700">{name}</h1>
          <h3 className="text-sm text-gray-400 ">{type}</h3>
          <p className="text-xs text-gray-400 mt-4">{id}</p>
          <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
