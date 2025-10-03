import { Link } from "react-router-dom";
import logoSrc from "../assets/logo.png";
import "../css/nav.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/dashboard">
          <img src={logoSrc} alt="PMG Logo" className="nav-logo" />
        </Link>
        <div className="hover-box">
          <div className="chains">
            <span className="chain"></span>
            <span className="chain"></span>
          </div>
          <div className="box-text">Premium Movies Gallery</div>
        </div>
      </div>
      <nav>
        <ul>
          <li className="search-container">
            <div className="search-box">
              <input
                type="search"
                placeholder="Search movies..."
                className="search-input"
              />
              <button className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </li>
          <li>
            <Link to="/dashboard"> Home</Link>
          </li>
          <li className="dropdown">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ cursor: "default" }}
            >
              <span className="clapper">🎬</span> Category
            </a>
            <div className="dropdown-content">
              <Link to="/nowshowing">Now Showing</Link>
              <Link to="/comingsoon">Coming Soon</Link>
              <Link to="/arabic">Arabic Movies</Link>
              <Link to="/hits">International Hits</Link>
            </div>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <button onClick={() => navigate("/login")}>Log in / Sign up</button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
