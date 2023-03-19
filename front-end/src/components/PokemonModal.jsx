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
      <div className="bg-white p-2 rounded-2xl relative min-w-[700px] min-h-[900px]">
        <div className="flex flex-col items-center">
          <p className="mt-8 text-6xl font-bold leading-tight text-primary">
            {name}
          </p>
          <img src={image} />

          <div className="flex flex-row">
            {types &&
              types.map((type, index) => (
                <div
                  key={index}
                  className={`${type} text-white border-2 border-black rounded-full inline-flex items-center justify-center mx-1 my-4 w-32`}
                >
                  <p className="py-1.5 font-semibold uppercase">{type}</p>
                </div>
              ))}
          </div>
          <div className="flex">
            <img src={frontSprite} className="w-1/2 pr-1" />
            <img src={backSprite} className="w-1/2 pl-1" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex">
            <img src={frontSpriteShiny} className="w-1/2 pr-1" />
            <img src={backSpriteShiny} className="w-1/2 pl-1" />
          </div>
          <button
            onClick={onClose}
            className="absolute top-1 right-1 mt-2 mr-2 p-1 rounded-2xl text-2xl font-semibold text-red-600 hover:text-white hover:bg-red-600 transition duration-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
export default PokemonModal;
