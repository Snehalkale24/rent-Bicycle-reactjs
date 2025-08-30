import Navbar from './Navbar.jsx';
import Img2 from '../assets/Img2.png';
import FeaturesSection from './FeaturesSection.jsx';
import ReviewSection from './ReviewSection.jsx';
import ReviewSection from './ReviewSection.jsx';


function Home() {
  return (
    <div className='bg-orange-100 '>
        <Navbar/>
        <img src={Img2} alt="" className='h-130 p-0 top-0 text-center m-auto'/>
        <h1 className='text-center font-bold text-gray-700 text-2xl p-5'>Rent a Bicycle with <span className='bg-green-400'>Ease</span> and <span className='bg-amber-300'>Convenience!</span></h1>
        <p className='text-center p-3 text-1.5xl'>Explore a city like never before with our bicycle rental service.Whether you're a local or a tourist, we offer a wide range of bicycles to suit your needs.</p>
        
         <FeaturesSection/>
         <ReviewSection/>
    </div>
    
  )
}

export default Home