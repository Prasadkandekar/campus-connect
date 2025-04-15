import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Student from "./routes/Student";
import Faculty from "./routes/Faculty";
import Admin from "./routes/Admin";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student/*" element={<Student />} />
        <Route path="/faculty/*" element={<Faculty />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
    // <AdminDashboard />
  );
};

export default App;
