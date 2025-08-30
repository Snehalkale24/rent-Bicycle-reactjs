import {Link} from 'react-router-dom';

function ExploreSection() {
  return (
    <div>
        <Link to="/explore" className="text-3xl block mx-auto bg-amber-600 text-white m-4 py-2 rounded-md cursor-pointer w-fit">Explore now ⚙️</Link>
    </div>
  )
}

export default ExploreSection