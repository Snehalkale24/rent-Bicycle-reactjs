import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import { EXPLORE } from './Explore.jsx'; 


function Bicycledetails() {
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id")); 

  const bicycle = EXPLORE.find(b => b.id === id);

  const [currentImage, setCurrentImage] = useState(0);
  cont [searchParamd]=setSearParas}
  const [bookingDetails,setBookingDetains]=useState({
    bking
  })

  const images = Array.isArray(bicycle.images) ? bicycle.images : [bicycle.images];

  return (
    <div >
      <Navbar />
      <h1 className='font-bold text-2xl p-3'>bicycles details: {id}</h1>
      <hr />
      <h1 className='m-4 text-blue-400 text-center font-bold text-3xl'>{bicycle.name}</h1>
      <p className='m-4'>{bicycle.description}</p>
      <p className='m-4'>Price: {bicycle.rentalPrice}</p>

     
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            width="80"
            onClick={() => setCurrentImage(index)}
            style={{ cursor: 'pointer', margin: '5px' }}
          />
        ))}
      </div>

      <img className='h-60 m-auto'
        src={images[currentImage]}
        alt={bicycle.name}
        width="300"
        style={{ marginTop: '10px' }}
      />
    </div>
  );
}

export default Bicycledetails;
