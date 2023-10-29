import { Link } from "react-router-dom"
import StarshipsList from "./StarshipsList"

const Starships = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen relative">
      <div className="space-x-1 flex absolute top-0 right-0 m-4">
        <p className="text-base-100 cursor-pointer">LOGIN</p>
        <p className="text-base-100">//</p>
        <p className="text-base-100 cursor-pointer">SIGN UP</p>
      </div>
      <div className="flex justify-center w-full px-0">
        <img className="star-wars-logo" src="./src//assets/star-wars-logo.svg" alt="Logo Star Wars" />
      </div>
      <div className='buttons-landing flex justify-center w-full'>
        <button className="tab tab-bordered text-base-100"><Link to="/">HOME</Link></button>
        <button className="tab tab-bordered text-base-100"><Link to="/starships">STARSHIPS</Link></button>
      </div>
      <StarshipsList/>
    </div> 
  )
} 

export default Starships
