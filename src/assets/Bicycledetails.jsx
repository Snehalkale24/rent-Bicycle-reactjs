import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';


function Bicycledetails() {
  const [searchParams] = useSearchParams();
  const id= searchParams.get("id");

  const [currentI]
  return (
    <div>
      <Navbar/>
      <h1>details :{id}</h1>
    </div>
  )
}

export default Bicycledetails