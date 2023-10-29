import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// Redux
import { fetchStarships, RootState, setStarships, Starship } from '../store/slices';
import { useDispatch, useSelector } from 'react-redux';

//Infinite Scroll
import InfiniteScroll from "react-infinite-scroll-component";

const StarshipsList: React.FC = () => {
  {/**Starship List */ }
  const { list: starships } = useSelector((state: RootState) => state.starships);
  {/**Dispatch */ }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStarships());
  }, [dispatch]);

  const fetchMoreStarships = () => {
    dispatch(fetchStarships());
  }


  return (
    <>
      <div className="mt-20">
        <h1 className="text-accent">STARSHIPS</h1>
      </div>
      <InfiniteScroll dataLength={starships.length}
        next={fetchMoreStarships}
        hasMore={true}
        loader={<>
          <h4 className="text-accent">Cargando...</h4>
          <span className="loading loading-ring loading-lg text-accent"></span>
        </>}>
        <ul>
          {starships.map((el: Starship, index: number) => (
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
      </InfiniteScroll>
    </>
  );
}

export default StarshipsList;
