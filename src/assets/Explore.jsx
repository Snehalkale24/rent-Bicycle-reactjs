import React from "react";
import Navbar from "./Navbar.jsx";
import Img3 from "./Img3.png";
import { Link } from "react-router-dom";
import Bicycledetails from "./Bicycledetails.jsx";

 export const EXPLORE = [
  {
    id: 1,
    name: "Mountain Bike",
    description: "Perfect for off road adventures and rugged terrains.", 
    rentalPrice: "®30 per hour",
    category: "Mountain",
    images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDz4zGALc1OWlDI5O3R_2RG0RUEycv88rSA&s" ,
    button:"Rent Now",
  },

  {
    id: 2,
    name: "Comfort City Bike",
    description: "Extra comfortable bike with cushioned seat and upright position",
    rentalPrice: "®28 per hour",
    category: "City",
    images: "https://easydrawingguides.com/wp-content/uploads/2023/02/how-to-draw-a-cartoon-bicycle-featured-image-1200.png" ,
    button:"Rent Now",
  },
  {
    id: 3,
    name: "Kids Mountain Bike",
    description: "Smaller mountain bike designed specifically for children.", rentalPrice: "®30 per hour",
    category: "Kids",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcinqKlQAx31QNNChMGa3IetcxNYFZwvrDOTQdecO_aJLGhV_kdi_K08-YvM5ySpwcFc&usqp=CAU",
    button:"Rent Now",
  },
  {
    id: 4,
    name: "Kids City Bike",
    description: "Smaller mountain bike designed specially for children.", rentalPrice: "®10 per hour",
    category: "Kids",
    images: "https://png.pngtree.com/png-vector/20220612/ourmid/pngtree-metal-tricycle-icon-cartoon-vector-png-image_5041981.png" ,
    button:"Rent Now",

  },
  {
    id: 5,
    name: "Cargo Bike",
    description: "Heavy-duty with large cargo capacity for deliveries.", rentalPrice: "®20 per hour",
    category: "Specially",
    images:"https://easydrawingguides.com/wp-content/uploads/2023/02/how-to-draw-a-cartoon-bicycle-featured-image-1200.png",
    button:"Rent Now", 
  },
  {
    id: 6,
    name: "Tandem Bike",
    description: "Two-Seater bike perfect for couples and friends.",
    rentalPrice: "®60 per hour",
    category: "Specially",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHLVUnGOeUwVTBLSOSvHF66U_N7_CmgPpig&s",
    button:"Rent Now",
  },
  {
    id: 7,
    name: "Downhill Mountain Bike", 
    description: "Heavy-duty Mountain bike designed for steep downhill trails.", 
    rentalPrice: "®20 per hour",
    category: "Mountain",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIgctNBSIfKrtbCMomL4s52z0Thp74yN1SwbWCjVFTamWlGN_WOC97ZBgeOsHnYkvZ2E&usqp=CAU" ,
    button:"Rent Now",
  },
  {
    id: 8, name: "Cargo Bike",
    description: "Heavy-duty mountain bike designed for steep downhill trails.", 
    rentalPrice: "®20 per hour",
    category: "Mountain",
    images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDz4zGALc1OWlDI5O3R_2RG0RUEycv88rSA&s",
    button:"Rent Now", 
  },
];

function Explore() {
  return (
    <div>
      <Navbar />
      <img src={Img3} alt="explore bicycle shop" className="h-100 w-auto ml-100 p-10" />

      <div className="m-10">
        <h3 className="text-2xl font-bold text-gray-700 text-center m-2 ">Your adventure begins here!</h3>
        <p>
          Explore our wide range of bicycles. Our collection includes everything from mountain bikes to road bikes,
          ensuring you find the perfect ride for your journey. Whether you're a seasoned cyclist or just starting out,
          we have something for everyone. Browse through our selection and discover the joy of cycling today!
        </p>
      </div>

      <div className="flex flex-wrap ">
        {EXPLORE.map((featureObj) => {
          const { id, name, description, rentalPrice, category, images,button} = featureObj;
          return (
            <div key={id} className="relative m-10 p-5 bg-white rounded-2xl shadow-lg w-72 shadow-orange-300 hover:scale-105">
              <span className="bg-green-300 text-white rounded-2xl px-2 py-2 absolute top-4">{category}</span>
              <span className="absolute top-[200px] right-0 bg-amber-50">{rentalPrice}</span>

              <img
                src={images}
                alt={name}
                className=""
              />

              <h4 className="text-center text-gray-700 text-2xl m-3">{name}</h4>
              <p className="mb-4">{description}</p>
              <Link className="bg-orange-500 text-white p-2 rounded-1xl 
              mt-4 ml-20 mx-auto w-fit" 
              to={`/Bicycledetails?id=${id}`}>{button}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
