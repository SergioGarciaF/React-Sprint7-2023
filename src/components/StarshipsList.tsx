
import { Link } from 'react-router-dom';

// Redux
import { fetchStarships, RootState, Starship } from '../store/slices';
import { useDispatch, useSelector } from 'react-redux';

//Infinite Scroll
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';
import Footer from './Footer';

const StarshipsList: React.FC = () => {
  const { list: starships, next } = useSelector((state: RootState) => state.starships);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchStarships())
  }, [])

  const fetchMoreStarships = () => {
    if (next) {
      dispatch(fetchStarships());
    }
  }

  return (
    <>
      <InfiniteScroll dataLength={starships.length}
        next={fetchMoreStarships}
        hasMore={!!next}
        loader={<span className="loading loading-ring loading-lg text-accent mt-2"></span>}>
        <ul>
          {starships.map((el: Starship, index: number) => (
            <li key={index}>
              <Link to={`/starships/${el.name}`}>
                <div className="card w-96 bg-success text-neutral-content mt-2 mx-auto light">
                  <div className="card-body items-center text-center">
                    <h2 className="text-accent font-roboto">{el.name}</h2>
                    <p className="text-accent font-roboto">{el.model}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
      <Footer />
    </>
  );
}

export default StarshipsList;
