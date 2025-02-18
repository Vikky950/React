import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // ✅ Added Link
import EhomePage from "./components/EhomePage"; // ✅ Ensure correct filename

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link> {/* ✅ Fixed missing Link import */}
      </nav>

      <Routes>
        <Route path="/" element={<EhomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
