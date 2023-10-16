import Home from "./Components/pages/home";
import Singel from "./Components/pages/singel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singel" element={<Singel />} />
        
      </Routes>
    </Router>
  );
}

export default App;
