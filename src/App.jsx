import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Vans from "./page/Van.jsx";
import VanDetail from "./page/VanDetail.jsx";
import "./server.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
