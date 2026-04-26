import "./css/App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login_page from "./pages/login_page.jsx";
import {
  Dashboard,
  NowShowing,
  ComingSoon,
  Arabic,
  Hits,
  About,
  BookingPage,
} from "./pages/index.js";
import Layout from "./components/Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login_page />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nowshowing" element={<NowShowing />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/arabic" element={<Arabic />} />
          <Route path="/hits" element={<Hits />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookingPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
