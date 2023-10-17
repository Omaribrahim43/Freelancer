import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Services from "./Components/pages/services";
import Single from "./Components/pages/single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* Define more routes here */}
        <Route path="/single" element={<Single />} />
        
      </Routes>
    </Router>
  );
}

export default App;


