
import Footer from "./Footer"
import Header from "./Header"

import pumpkin from '../assets/accordion/nubs-pumpkin-spheres-hero-desktop_c4a61be1.jpeg'
import quiz from '../assets/accordion/halloween-quiz-sashsingle-hero-desktop_01479008.jpeg'
import lothcat from '../assets/accordion/loth-cat-pumpkin-spheres-hero-desktop_35e6cb6c.jpeg'
import tauntaun from '../assets/accordion/tauntaun-cookies-spheres-hero-desktop_3cf43aca.jpeg'
import ashoka from '../assets/accordion/ahsoka-episode-guides-desktop_73a8a340.jpeg'
import lego from '../assets/accordion/lego-star-wars-terrifying-tales-hero-desktop_6500122e_86411a97.jpeg'

const Home = () => {
  return (
    <>
      <Header />
      <div className="carousel w-full overscroll-none">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={pumpkin} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          <div className=" text-img absolute flex flex-wrap items-center justify-start text-white w-1/3 break-all">
            <h1 className="text-4xl text-start"><strong>DECORATE YOUR DOORSTEP WITH A NUBS-O'-LANTERN</strong></h1>
            <p className="text-start mt-6">Bring the adventure home for Halloween and entertain local younglings who stop by for trick-or-treating!</p>
            <button className="btn btn-secondary mt-6">READ MORE</button>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={quiz} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          <div className=" text-img absolute flex flex-wrap items-center justify-start text-white w-1/3 break-all">
            <h1 className="text-4xl text-start"><strong>QUIZ: WHICH STAR WARS CHARACTER SHOULD YOU BE FOR HALLOWEEN?</strong></h1>
            <p className="text-start mt-6">From cute to creepy, StarWars.com is here to help you choose the perfect costume.</p>
            <button className="btn btn-secondary mt-6">READ MORE</button>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={lothcat} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          <div className=" text-img absolute flex flex-wrap items-center justify-start text-white w-1/3 break-all">
            <h1 className="text-4xl text-start"><strong>YOU'LL LOVE THIS DIY LOTH-CAT PUMPKIN MEOW AND FOREVER</strong></h1>
            <p className="text-start mt-6">Celebrate Halloween with one of the standout stars of Ashoka: Sabine´s Loth-cat!</p>
            <button className="btn btn-secondary mt-6">READ MORE</button>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={tauntaun} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
          <div className=" text-img absolute flex flex-wrap items-center justify-start text-white w-1/3 break-all">
            <h1 className="text-4xl text-start"><strong>GO FOR A RIDE WITH THESE TAUNTAUN COOKIES</strong></h1>
            <p className="text-start mt-6">These taste good on the outside... and inside! These taste good on the outside... and inside!These taste good on the outside... and inside!These taste good on the outside... and inside!</p>
            <button className="btn btn-secondary mt-6">READ MORE</button>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={ashoka} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
          <div className=" text-img absolute flex flex-wrap items-center justify-start text-white w-1/3 break-all">
            <h1 className="text-4xl text-start"><strong>ASHOKA EPISODE GUIDES ARE HERE!</strong></h1>
            <p className="text-start mt-6">Journey through all eight episodes! Journey through all eight episodes!Journey through all eight episodes!Journey through all eight episodes!</p>
            <button className="btn btn-secondary mt-6">READ MORE</button>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={lego} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          <div className=" text-img absolute flex flex-wrap items-center justify-start text-white w-1/3 break-all">
            <h1 className="text-4xl text-start"><strong>TERRYFING TALES</strong></h1>
            <p className="text-start mt-6">Celebrate the villainous dark side of the Star Wars galaxy!</p>
            <button className="btn btn-secondary mt-6">READ MORE</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
