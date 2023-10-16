import Home from "./Components/pages/home";
import Services from "./Components/pages/services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* Define more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
