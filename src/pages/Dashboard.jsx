import Navbar from "../components/Navbar.jsx";
import Loading_Screen from "../pages/loading_screen.jsx";
import "../css/dashboard.css";
import logoSrc from "../assets/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ id, title, poster, rating, overview, isFlipped, onClick }) => {
  return (
    <label
      htmlFor={`c-${id}`}
      className={`item ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      <div className="main_content">
        <div className="img">
          <img src={poster} alt="" />
        </div>
        <div className="content" style={{ backgroundImage: `url(${poster})` }}>
          <div className="poster-circle">
            <img src={poster} alt="" />
          </div>
          <h1>{title}</h1>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span>{rating}</span>
          </div>
          <p>{overview}</p>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </label>
  );
};

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=75d042ef3db90c06f6dea2e75b760e35"
        );
        setMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const rotationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000); // Increased interval for better user experience

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(rotationInterval);
  }, [movies.length]); // Rerun effect if the number of movies changes

  const goToSlide = (index) => {
    setCurrentIndex((index + movies.length) % movies.length);
    setFlippedCards({}); // Un-flip all cards when slide changes
  };

  const handlePrev = () => {
    goToSlide(currentIndex - 1);
  };

  const handleNext = () => {
    goToSlide(currentIndex + 1);
  };

  const handleCardClick = (movieId, index) => {
    // Set the clicked card as the current one
    setCurrentIndex(index);
    // Toggle the flipped state for the clicked card
    setFlippedCards((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  if (movies.length === 0) return <Loading_Screen />;

  return (
    <>
      <Loading_Screen />
      <img className="bg-logo" src={logoSrc} alt="logo" />

      <main id="home">
        <h1>🎬 Welcome to PMG Cinema</h1>
        <p>
          Explore the world of movies, from Arabic legends to global
          blockbusters.
        </p>

      <h1>Now Showing</h1>
      <div className="slider">
        {movies.map((movie, index) => (
          <input
            type="radio"
            id={`c-${index+1}`}
            name="slider"
            key={movie.id}
            checked={currentIndex === index}
            onChange={() => goToSlide(index)}
          />
        ))}
        <button className="arrow arrow-left" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="cards">
          {movies.map((movie, index) => {
            return (
              <Card
                key={movie.id}
                id={index+1}
                title={movie.title}
                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                rating={movie.vote_average}
                overview={movie.overview}
                isFlipped={!!flippedCards[movie.id]}
                onClick={() => handleCardClick(movie.id, index)}
              />
            );
          })}
        </div>
        <button className="arrow arrow-right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {movies.map((movie, index) => {
          return (
            <label
              key={`dot-${movie.id}`}
              htmlFor={`c-${index+1}`}
              onClick={() => goToSlide(index)}
            ></label>
          );
        })}
      </div>
      </main>
    </>
  );
}

export default Dashboard;
