const PokemonModal = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white p-2 rouded">
        <p>My Modal</p>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};
export default PokemonModal;
