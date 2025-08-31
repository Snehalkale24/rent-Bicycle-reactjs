import Navbar from './assets/Navbar.jsx';
import Img2 from './Img2.png';
import FeaturesSection from './assets/FeaturesSection.jsx';   // spelling fixed ✅
import ReviewSection from './assets/ReviewSection.jsx';
import ExploreSection from './assets/ExploreSection.jsx';

function Home() {
  return (
    <div className="bg-orange-100">
      <Navbar />

      <img
        src={Img2}
        alt="Bicycle"
        className="h-130 p-0 top-0 text-center m-auto"
      />

      <h1 className="text-center font-bold text-gray-700 text-2xl p-5">
        Rent a Bicycle with{" "}
        <span className="bg-green-400">Ease</span> and{" "}
        <span className="bg-amber-300">Convenience!</span>
      </h1>

      <p className="text-center p-3 text-lg">
        Explore a city like never before with our bicycle rental service. <br />
        Whether you're a local or a tourist, we offer a wide range of bicycles
        to suit your needs.
      </p>

      <ExploreSection />
      <FeaturesSection />
      <ReviewSection />
    </div>
  );
}

export default Home;
