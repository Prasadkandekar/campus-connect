import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Student from "./routes/Student";
import Faculty from "./routes/Faculty";
import Admin from "./routes/Admin";
function App() {
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path ="/"element={<LandingPage />}/>  
      </Routes>
    </Router> */}
    {/* <Admin /> */}
    <Student />
    {/* <Faculty /> */}
    </>
  );  
}

export default App;