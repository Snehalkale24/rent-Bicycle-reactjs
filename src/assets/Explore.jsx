import React from "react";
import Navbar from "./Navbar.jsx";
import Img3 from "./Img3.png";

const EXPLORE = [
  { id: 1, name: "Mountain Bike",
     description: "Perfect for off road adventures and rugged terrains.", rentalPrice: "30 per hour",
      category: "Mountain",
       images: []
       },

  { id: 2, 
    name: "Comfort City Bike",
     description: "Extra comfortable bike with cushioned seat and upright position", rentalPrice: "®28 per hour",
      category: "City",
       images: [] 
      },
  { id: 3,
     name: "Kids Mountain Bike", 
     description: "Smaller mountain bike designed specifically for children.", rentalPrice: "®30 per hour",
     category: "Kids",
      images: [] },
  { 
    id: 4,
     name: "Kids City Bike",
      description: "Smaller mountain bike designed specially for children.", rentalPrice: "®10 per hour",
       category: "Kids", 
       images: [] 

  },
  { 
    id: 5,
     name: "Cargo Bike",
      description: "Heavy-duty with large cargo capacity for deliveries.", rentalPrice: "®20 per hour",
       category: "Specially",
     images: []
     },
  { 
    id: 6,
     name: "Tandem Bike", 
     description: "Two-Seater bike perfect for couples and friends.", 
     rentalPrice: "®60 per hour",
      category: "Specially", 
      images: []
    },
  { 
    id: 7,
     name: "Downhill Mountain Bike", description: "Heavy-duty Mountain bike designed for steep downhill trails.", rentalPrice: "®20 per hour", 
    category: "Mountain", 
    images: [] 
  },
  { id: 8, name: "Cargo Bike", description: "Heavy-duty mountain bike designed for steep downhill trails.", rentalPrice: "®20 per hour", 
    category: "Mountain", 
    images: [] },
];

function Explore() {
  return (
    <div>
      <Navbar />
      <img src={Img3} alt="explore bicycle shop" className="h-100 w-auto ml-100 p-10" />

      <div className="m-10">
        <h3 className="text-2xl font-bold text-gray-700 text-center m-2">Your adventure begins here!</h3>
        <p>
          Explore our wide range of bicycles. Our collection includes everything from mountain bikes to road bikes,
          ensuring you find the perfect ride for your journey. Whether you're a seasoned cyclist or just starting out,
          we have something for everyone. Browse through our selection and discover the joy of cycling today!
        </p>
      </div>

      <div className="flex flex-wrap">
        {EXPLORE.map((featureObj) => {
          const { id, name, description, rentalPrice, category } = featureObj;
          return (
            <div key={id} className="relative m-10 p-5 bg-white rounded-2xl shadow-lg w-72 shadow-orange-300">
              <span className="bg-black text-white rounded-2xl px-2 py-2 absolute top-4">{category}</span>
              <span className="absolute top-[200px] right-0 bg-amber-50">{rentalPrice}</span>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGs-MmgDhL7_x7zkL7HevBrqlLGM0ATTXz9g&s"
                alt={name}
                className="w-full object-contain"
              />

              <h4 className="text-center text-gray-700 text-2xl">{name}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
