import { useEffect } from "react";

const PokemonModal = ({
  visible,
  onClose,
  name,
  image,
  frontSprite,
  frontSpriteShiny,
  backSprite,
  backSpriteShiny,
  types,
}) => {
  const handleOnClose = () => {
    onClose();
  };

  useEffect(() => {}, [types]);

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white p-4 md:p-2 rounded-lg md:rounded-2xl md:relative max-w-[900px] md:min-w-[700px] md:min-h-[900px] overflow-hidden">
        <div className="flex flex-col items-center mt-4">
          <p className="md:mt-8 text-4xl md:text-6xl font-bold leading-tight text-primary">
            {name}
          </p>
          <img
            src={image}
            alt={name}
            className="w-40 h-40 md:w-max md:h-max mt-4 md:mt-0"
          />

          <div className="flex flex-row mt-4 md:mt-0">
            {types &&
              types.map((type, index) => (
                <div
                  key={index}
                  className={`${type} text-white border-2 border-black rounded-full inline-flex items-center justify-center mx-1 my-2 md:my-4 w-20 md:w-32`}
                >
                  <p className="py-1.5 font-semibold uppercase">{type}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0">
            <img
              src={frontSprite}
              className="w-full md:w-1/2 pr-1"
              alt="Front Sprite"
            />
            <img
              src={backSprite}
              className="w-full md:w-1/2 pl-1"
              alt="Back Sprite"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-0 md:items-center">
            <img
              src={frontSpriteShiny}
              className="md:w-1/2 pr-1"
              alt="Front Shiny Sprite"
            />
            <img
              src={backSpriteShiny}
              className="md:w-1/2 pl-1"
              alt="Back Shiny Sprite"
            />
          </div>
        </div>
        <button
          onClick={handleOnClose}
          className="absolute top-1 right-1 mt-2 mr-2 p-1 rounded-2xl text-2xl font-semibold text-red-600 hover:text-white hover:bg-red-600 transition duration-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default PokemonModal;
