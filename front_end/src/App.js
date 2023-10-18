import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Services from "./Components/pages/services";
import Singel from "./Components/pages/singel";
import Profile from "./Components/pages/profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* Define more routes here */}
        <Route path="/singel" element={<Singel />} />

        <Route path="/my_profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;


