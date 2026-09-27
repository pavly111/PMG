import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./footer";
import "../css/layout.css";

const Layout = () => {
  return (
    <div className="app-shell">
      <NavBar />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;