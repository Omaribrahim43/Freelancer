import Home from "./Components/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
