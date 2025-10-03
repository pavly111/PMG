import Navbar from "../components/Navbar.jsx";
import { useLoadingScreen } from "../hooks/useLoadingScreen.js";
import popcornSrc from "../assets/popcorn.png";
import facebookSrc from "../assets/facebook.png";
import instagramSrc from "../assets/instagram.png";
import netflixSrc from "../assets/netflix.png";
import watchitSrc from "../assets/watchit.png";
import disneySrc from "../assets/disney.png";
import shahidSrc from "../assets/shahid.jpg";
import youtubeSrc from "../assets/youtube.png";
import imdbSrc from "../assets/imdb.png";
import "../css/about.css";

function About() {
  useLoadingScreen(2000);
  return (
    <>
      <div className="bg-logo"></div>
      <div className="container">
        <div className="popcorn-container">
          <img src={popcornSrc} alt="about us" className="about-logo" id="popcorn" />
          <div className="icon-container">
            <img className="floating facebook" src={facebookSrc} alt="facebook" />
            <img className="floating instagram" src={instagramSrc} alt="instagram" />
            <img className="floating netflix" src={netflixSrc} alt="netflix" />
            <img className="floating watchit" src={watchitSrc} alt="watchit" />
            <img className="floating disney-plus" src={disneySrc} alt="disney plus" />
            <img className="floating shahid" src={shahidSrc} alt="shahid" style={{ borderRadius: 10 }} />
            <img className="floating youtube" src={youtubeSrc} alt="youtube" />
            <img className="floating imdb" src={imdbSrc} alt="imdb" />
          </div>
        </div>
      </div>

    </>
  );
}

export default About;


