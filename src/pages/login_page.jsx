import "../css/style.css";
import { useState } from "react";
import { useLoadingScreen } from "../hooks/useLoadingScreen.js";
import { useNavigate } from "react-router-dom";
import Loading_Screen from "../pages/loading_screen.jsx";
import logosrc from "../assets/logo.png";

function Login_page() {
  const [showLogin, setShowLogin] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({});
  const navigate = useNavigate();
  useLoadingScreen(10000);

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Dynamically set the class for the box based on hover state
  const boxClassName = `box ${isHovering ? "expanded" : ""}`;

  return (
    <>
      <Loading_Screen />
      <div id="main-content">
        <div
          className={boxClassName}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`brand ${isHovering ? "hidden" : ""}`}>
            <img src={logosrc} alt="PMG Logo" className="main-logo" />
            <p>Cinematic Tech. Vintage Soul.</p>
          </div>
          <div className={`login ${isHovering ? "visible" : ""}`}>
            {showLogin ? (
              <form className="loginBx login-form">
                <h2>
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </h2>
                <input type="email" placeholder="Email" required />
                <div className="password-field">
                  <input
                    type={passwordVisibility.login ? "text" : "password"}
                    placeholder="Password"
                    required
                  />
                  <i
                    className={`fa-solid ${
                      passwordVisibility.login ? "fa-eye-slash" : "fa-eye"
                    } toggle-password`}
                    onClick={() => togglePasswordVisibility("login")}
                  ></i>
                </div>
                <input
                  type="submit"
                  value="Sign in"
                  onClick={() => navigate("/dashboard")}
                />
                <div className="group">
                  <a href="#">Forgot Password</a>
                  <a onClick={() => setShowLogin(false)}>Sign up</a>
                </div>
              </form>
            ) : (
              <form className="loginBx signup-form">
                <h2>
                  <i className="fa-solid fa-user-plus"></i> Sign Up
                </h2>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <div className="password-field">
                  <input
                    type={passwordVisibility.signup1 ? "text" : "password"}
                    placeholder="Password"
                    required
                  />
                  <i
                    className={`fa-solid ${
                      passwordVisibility.signup1 ? "fa-eye-slash" : "fa-eye"
                    } toggle-password`}
                    onClick={() => togglePasswordVisibility("signup1")}
                  ></i>
                </div>
                <div className="password-field">
                  <input
                    type={passwordVisibility.signup2 ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                  />
                  <i
                    className={`fa-solid ${
                      passwordVisibility.signup2 ? "fa-eye-slash" : "fa-eye"
                    } toggle-password`}
                    onClick={() => togglePasswordVisibility("signup2")}
                  ></i>
                </div>
                <input type="submit" value="Create Account" />
                <div className="group">
                  <a onClick={() => setShowLogin(true)}>Back to Login</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Login_page;
