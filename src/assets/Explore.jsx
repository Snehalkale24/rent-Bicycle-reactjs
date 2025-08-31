import React from 'react';
import Navbar from './Navbar.jsx';
import Img3 from './Img3.png'

function explore() {
  return (
    <div>
        <Navbar/>
        <img src={Img3} alt="explore bicycle shop" className='h-100 w-auto ml-100 p-10'/>
    </div>
    
  )
}

export default explore