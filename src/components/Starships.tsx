
import { useSelector } from "react-redux";
import Header from "./Header"
import StarshipsList from "./StarshipsList"
import { Navigate } from "react-router-dom";


const Starships = () => {
  return (
    <>
      <Header />
      <StarshipsList />
    </>
  )
}

export default Starships
