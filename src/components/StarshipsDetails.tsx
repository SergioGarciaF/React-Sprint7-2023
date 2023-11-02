import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchStarshipsDetails } from "../store/slices";
import Header from "./Header";
import Footer from "./Footer";

interface Starship {
  name: string;
  url: string;
  model: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  manufacturer: string;
  length: string;
  crew: string;
}

const StarshipsDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useDispatch();
  const starship = useSelector((state: RootState) => state.starships.list.find(starship => starship.name === name));

  useEffect(() => {
    dispatch(fetchStarshipsDetails());
  }, [dispatch]);

  if (starship) {
    const id = starship.url.split("/").slice(-2, -1)[0];
    const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    return (
      <>
        <Header />
        <div className="py-10 px-20">
          <div className="card card-side bg-success shadow-xl border border-accent" >
              <img className="text-accent" src={imageUrl} alt={starship.name}/>
            <div className="card-body">
              <h2 className="card-title text-accent font-roboto"><strong>{starship.name}</strong></h2>
              <p className="text-accent text-start font-roboto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, deserunt. Nihil animi illum amet labore, harum voluptates ipsa eius fuga. Cupiditate sed sapiente, ipsam adipisci consectetur suscipit aut eius totam.</p>
              <div className="card-actions grid grid-cols-2 text-start">
                <ul>
                  <li className="text-accent font-roboto">
                    - Model: {starship.model}
                  </li>
                  <li className="text-accent font-roboto">
                    - Cost in credits: {starship.cost_in_credits}
                  </li>
                  <li className="text-accent font-roboto">
                    - Atmospheric speed: {starship.max_atmosphering_speed}
                  </li>
                </ul>
                <ul>
                  <li className="text-accent font-roboto"> - Manufacturer: {starship.manufacturer}</li>
                  <li className="text-accent font-roboto"> -Length: {starship.length}</li>
                  <li className="text-accent font-roboto"> - Crew: {starship.crew}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return null;
}

export default StarshipsDetails;
