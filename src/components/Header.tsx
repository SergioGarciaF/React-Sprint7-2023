import tiktokIcon from '../assets/tiktok-24.png';
import instagramIcon from '../assets/instagram-6-24.png';
import xIcon from '../assets/twitter-x.png';
import facebookIcon from '../assets/facebook-3-24.png';
import youtubeIcon from '../assets/youtube-6-24.png';
import starwarsLogo from '../assets/star-wars-logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/slices';

const Header = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <div className="navbar flex items-start justify-between">
        <div className="navbar-start flex space-x-5 ms-20 mt-8">
          <a href="#">
            <img src={tiktokIcon} alt="TikTok Icon" width="20px" height="20px" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="Instagram Icon" width="20px" height="20px" />
          </a>
          <a href="#">
            <img src={xIcon} alt="Twitter Icon" width="20px" height="20px" />
          </a>
          <a href="#">
            <img src={facebookIcon} alt="Facebook Icon" width="20px" height="20px" />
          </a>
          <a href="#">
            <img src={youtubeIcon} alt="YouTube Icon" width="20px" height="20px" />
          </a>
        </div>
        <div className="navbar-center mt-8">
          <img className="star-wars-logo" src={starwarsLogo} alt="Logo Star Wars" />
        </div>
        <div className="navbar-end flex items-center me-20 mt-8 space-x-3">
          {user.email ? (
            <>
            <p className="text-base-100 font-roboto"><strong>{user.email}</strong></p>
            <p className="text-base-100 font-roboto">//</p>
            <button><a className="text-base-100 font-roboto"><strong>LOG OUT</strong></a></button>
            </>
            
          ) : (
            <>
              <Link to="/login">
                <p className="text-base-100 cursor-pointer font-roboto animated-underline">LOGIN</p>
              </Link>
              <p className="text-base-100 font-roboto">//</p>
              <Link to="/signup">
                <p className="text-base-100 cursor-pointer font-roboto animated-underline">SIGN UP</p>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="buttons-landing flex justify-center w-full">
        <a className="tab tab-bordered text-base-100 font-roboto animated-underline me-2">
          <Link to="/home">HOME</Link>
        </a>
        <a className="tab tab-bordered text-base-100 font-roboto animated-underline">
          <Link to="/starships">STARSHIPS</Link>
        </a>
      </div>
      <hr />
      <h2 className="text-accent text-center font-roboto py-3">
        <strong>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</strong>
      </h2>
      <hr />
    </>
  );
};

export default Header;
