import { HandCoins,Bike } from "lucide-react"
const FEATURES_CONFIG = [
    {
        title:"Low Prices",
        description:"we offer the most competitive prices in the market.",
        icon:<HandCoins/>,
    },
    {
    title: "Wide selection ",
    description:"choose from a variety of bicycle to suit your needs",
    icon:<Bike/>,
    }
];

function FeaturesSection() {
  return (
    <div>
        <h2 className='text-center text-30xl text-orange-950'>Why Choose Our Bicycle Rental Service?</h2>
        <div>{FEATURES_CONFIG.map((feactureObj)=>{
            const { title, description, icon} = feactureObj;
            return <div></div>
        
        })}</div>
    </div>
  )
}

export default FeaturesSection