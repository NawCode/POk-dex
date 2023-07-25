import { Link } from "react-router-dom";

import pokéball from "../assets/pokéball.png";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const { pathname } = e.currentTarget;

    if (pathname === window.location.pathname) {
      window.location.reload(true);
    } else {
      window.location.href = pathname;
    }
  };

  return (
    <div className="bg-red-600">
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <div className="flex flex-row">
          <Link to="/" onClick={handleClick}>
            <img
              className="h-12 mx-2 mt-0.5 cursor-pointer hover:scale-125 transition duration-300"
              alt="logo"
              src={pokéball}
            />
          </Link>
          <div className="mx-2 text-white font-border text-5xl font-bold">
            Pokédex
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
