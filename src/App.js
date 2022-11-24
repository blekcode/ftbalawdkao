import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/HomeScreen";
import Competitions from "./pages/Competitions";
import About from "./pages/About";
import TeamDetail from "./pages/TeamDetail";
import CompetitionDetail from "./pages/CompetitionDetail";

function App() {
  return (
    <div className="App">
      <header>⚽ Football App</header>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:id" element={<TeamDetail />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competition/:id" element={<CompetitionDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </main>
      <footer>
        <div className="navigation">
          <NavLink to="/" className="navigation-item">
            Home
          </NavLink>
          <NavLink to="/competitions" className="navigation-item">
            Competition
          </NavLink>
          <NavLink to="/about" className="navigation-item">
            About
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default App;
