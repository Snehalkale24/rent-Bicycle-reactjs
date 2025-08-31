import React from 'react';
import Img from './bicycle.png';

function Navbar() {
  return (
    <div className="bg-orange-200 p-4 px-7 border-b-4 border-orange-300">
      <span className="font-bold text-orange-800">
        <img src={Img} alt="Logo" className="h-10 inline-block m-2" />
        Rent a Bicycle
      </span>
    </div>
  );
}

export default Navbar;
