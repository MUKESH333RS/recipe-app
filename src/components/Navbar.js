import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">Recipe App</Link>
      <Link to="/favorites" className="bg-red-400 px-4 py-2 rounded-lg">Favorites</Link>
    </nav>
  );
};

export default Navbar;
