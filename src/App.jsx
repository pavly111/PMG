import "./css/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login_page from "./pages/login_page.jsx";
import { Dashboard, NowShowing, ComingSoon, Arabic, Hits, About } from "./pages/index.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (

    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Login_page />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nowshowing" element={<NowShowing />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/arabic" element={<Arabic />} />
        <Route path="/hits" element={<Hits />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
