import { HandCoins, Bike , CalendarCheck,LifeBusy } from "lucide-react"
const FEATURES_CONFIG = [
  {
    title: "Low Prices",
    description: "we offer the most competitive prices in the market.",
    icon: <HandCoins />,
  },
  {
    title: "Wide selection ",
    description: "choose from a variety of bicycle to suit your needs",
    icon: <Bike />,
  },
  {
    title : "Easy Booking",
    description:"Book your bicycle online in just a  few clicks.",
    icon: <CalendarCheck/>
  },
  {
    title : "Safety First",
    description:"All our bicycles are regulary maintained for your safety.",
    icon: <LifeBusy/>
  },
];

function FeaturesSection() {
  return (
    <div>
      <h2 className='text-center text-30xl text-orange-950'>Why Choose Our Bicycle Rental Service?</h2>


      <div className="flex m-10 p-3">{FEATURES_CONFIG.map((feactureObj) => {
        const { title, description, icon } = feactureObj;

        return (
          <div key={title}className="m-3 p-4 bg-orange-200 ">{icon}
          <h3>{title}</h3>
          <p>{description}</p>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default FeaturesSection