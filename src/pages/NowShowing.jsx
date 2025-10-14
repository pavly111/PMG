import Navbar from "../components/Navbar.jsx";
import Loading_screen from "../pages/loading_screen.jsx";
import "../css/nowshowing.css";
import logosrc from "../assets/logo.png";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ id, poster, onMouseEnter }) {
  return (
    <div className="list-item" id={id} onMouseEnter={() => onMouseEnter(id)}>
      <div className="movie-poster">
        <img src={poster} alt="" />
      </div>
    </div>
  );
}

function MovieDetails({ movie }) {
  const navigate = useNavigate();

  if (!movie) {
    return (
      <>
        <div className="movie-container">
          <div className="default-text">
            <h2 id="default">Select a movie to see details</h2>
            <h1 id="default">Now Showing</h1>
          </div>
        </div>
      </>
    );
  }

  const handleBookNow = () => {
    navigate("/book", { state: { movie } });
  };

  return (
    <>
      <div className="movie-container movie">
        <div className="movie-details" id={movie.id}>
          <div className="movie-info movie">
            <h2 id="movie-title">{movie.title}</h2>
            <div className="movie-meta">
              <span id="movie-rating" className="meta-item">
                Rating: {movie.vote_average}
              </span>
              <span id="movie-genre" className="meta-item">
                Genre:{" "}
                {movie.genres
                  ? movie.genres.map((genre) => genre.name).join(", ")
                  : "Loading..."}
              </span>
            </div>
            <p id="movie-description" className="movie-description">
              {movie.overview}
            </p>
            <div className="movie-actions">
              <button className="btn-book" onClick={handleBookNow}>
                Book Now
              </button>
              <button className="btn-trailer">Watch Trailer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NowShowing() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const sliderWrapperRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreResponse = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=75d042ef3db90c06f6dea2e75b760e35"
        );
        const genreMap = genreResponse.data.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});

        const movieResponse = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=75d042ef3db90c06f6dea2e75b760e35",
          {
            params: {
              language: "en-US",
              include_adult: false,
              include_video: false,
            },
          }
        );

        const moviesWithGenres = movieResponse.data.results.map((movie) => ({
          ...movie,
          genres: movie.genre_ids.map((id) => ({ id, name: genreMap[id] })),
        }));
        setMovies(moviesWithGenres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  const [itemWidth, setItemWidth] = useState(196); // Default width
  const [visibleItems, setVisibleItems] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const calculateWidths = () => {
      if (
        sliderWrapperRef.current &&
        sliderWrapperRef.current.firstElementChild
      ) {
        const sliderItem = sliderWrapperRef.current.firstElementChild;
        const sliderItemStyle = window.getComputedStyle(sliderItem);
        const newWidth =
          sliderItem.offsetWidth + parseFloat(sliderItemStyle.marginRight);
        setItemWidth(newWidth);

        const containerWidth =
          sliderWrapperRef.current.parentElement.offsetWidth;
        setVisibleItems(Math.floor(containerWidth / itemWidth));
      }
    };

    calculateWidths();
    window.addEventListener("resize", calculateWidths);
    return () => window.removeEventListener("resize", calculateWidths);
  }, [movies, itemWidth]); // Recalculate when movies or itemWidth changes

  useEffect(() => {
    if (sliderWrapperRef.current) {
      const translateX = -sliderIndex * itemWidth;
      sliderWrapperRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [sliderIndex, itemWidth]);

  const handlePrev = () => {
    setSliderIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleNext = () => {
    const maxIndex = movies.length - visibleItems;
    setSliderIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };
  const handleHover = (index) => {
    setCurrentIndex(index);
  };

  if (movies.length === 0) return <Loading_screen />;

  const backgroundStyle = movies[currentIndex]
    ? {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[currentIndex].backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <>
      <Loading_screen />
      <MovieDetails movie={movies[currentIndex]} />
      {currentIndex >= 0 && movies[currentIndex] ? (
        <div className="bg" style={backgroundStyle}></div>
      ) : (
        <img className="bg-logo" src={logosrc} alt="logo" />
      )}
      <div className="list-contanier">
        <div className="slider-wrapper" ref={sliderWrapperRef}>
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              id={index}
              poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              onMouseEnter={() => handleHover(index)}
            />
          ))}
        </div>
        <button
          className="prev"
          onClick={handlePrev}
          style={{ opacity: sliderIndex === 0 ? "0.5" : "1" }}
        >
          &#10094;
        </button>
        <button
          className="next"
          onClick={handleNext}
          style={{
            opacity: sliderIndex >= movies.length - visibleItems ? "0.5" : "1",
          }}
        >
          &#10095;
        </button>
      </div>
    </>
  );
}

export default NowShowing;
