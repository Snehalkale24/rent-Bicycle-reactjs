import React from 'react';
import Img from './bicycle.png';
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="bg-orange-200 p-4 px-7 border-b-4 border-orange-300">
      <Link className="font-bold text-orange-800" to="/">
        <img src={Img} alt="Logo" className="h-10 inline-block m-2"  />
        Rent a Bicycle
      </Link>
    </div>
  );
}

export default Navbar;
