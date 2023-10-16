import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Define more routes here */}
      </Routes>
    </Router>
  );
}

export default App;


