import React from 'react'

const REVIEW = [
  {
    name: "snehal kale",
    review: "great service and friendly staff",
    rating: 4,
    avtar: "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
  },
  {
    name: "krushna khase",
    review: "The bikes were in excellent condition",
    rating: 5,
    avtar: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  },
  {
    name: "rajeshri kale",
    review: "Quick service and polite behaviour",
    rating: 5,
    avtar: "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
  },
]

function ReviewSection() {
  return (
    <div>
      <h2 className='text-center text-gray-600 text-2xl font-bold pt-3'>
        What our Customers Say.....
      </h2>

      <div className='flex flex-wrap justify-center m-10 p-5'>
        {REVIEW.map((item, index) => {
          const { name, review, rating, avtar } = item;

          return (
            <div 
              key={index} 
              className="m-3 p-5 bg-white rounded-2xl shadow-lg w-72 transition-transform duration-300 hover:scale-105 shadow-orange-300"
            >
              <div className='flex items-center mb-3'>
                <img 
                  src={avtar} 
                  alt={name} 
                  className="w-12 h-12 rounded-full mr-3 border border-gray-300 shadow-sm"
                />
                <h1 className='font-bold text-lg text-gray-800'>{name}</h1>
              </div>
              <p className='text-gray-600 mb-2'>{review}</p>
              <p className='text-yellow-500 font-semibold'>⭐ {rating}/5</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewSection
