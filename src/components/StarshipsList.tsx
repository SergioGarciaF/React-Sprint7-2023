import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

interface Starship {
  name: string;
  model: string;
}

const StarshipsList: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setStarships(data.results));
  }, []);

  return (
    <>
      <div className="mt-20">
        <h1 className="text-accent">STARSHIPS</h1>
      </div>
      <ul>
        {starships.map((el, index) => (
          <li key={index}>
            <Link to={`/starships/${el.name}`}>
              <div className="card w-96 bg-success text-neutral-content mt-2">
                <div className="card-body items-center text-center">
                  <h2 className="text-accent">{el.name}</h2>
                  <p className="text-accent">{el.model}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StarshipsList;
