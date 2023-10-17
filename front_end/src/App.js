import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Services from "./Components/pages/services";
import Singel from "./Components/pages/singel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddService from "./Components/pages/AddService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:id" element={<Services />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* Define more routes here */}
        <Route path="/singel" element={<Singel />} />
        <Route path="/add-service" element={<AddService />} />
        
      </Routes>
    </Router>
  );
}

export default App;


