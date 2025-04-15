import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FacultyDashboard from "../pages/FacultyDashboard";
import TakeAttendance from '../components/faculty/TakeAttendance';
import AddNotes from '../components/faculty/AddNotes';
import Divisions from '../components/faculty/Divisions';
import FacultySideBar from '../components/sidebar/FacultySideBar';
import "../App.css"
import StudentStressLevel from '../components/faculty/StudentStressLevel';
import StudentLocation from '../components/faculty/StudentLocation';
import FacultyProfile from '../components/faculty/FacultyProfile';
import FacultySettings from '../components/faculty/FacultySettings';
import FacultyProfileEdit from '../components/faculty/FacultyProfileEdit';
import FacultyChangePassword from '../components/faculty/FacultyChangePassword';

const Faculty = () => {
  return (
    <>
    <Router>
     <FacultySideBar>
         <Routes>
             <Route path="/faculty" element={<FacultyDashboard />} />
             <Route path="/take-attendance" element={<TakeAttendance />} />
             <Route path="/add-notes" element={<AddNotes />} />
             <Route path="/divisions" element={<Divisions />} />
             <Route path="/student-stress-level" element={<StudentStressLevel />} />
              <Route path="/location" element={<StudentLocation/>} />
             <Route path="/faculty-profile" element={<FacultyProfile />} />
             <Route path="/faculty-settings" element={<FacultySettings />} />
             <Route path="faculty-settings/edit-profile" element={<FacultyProfileEdit />} />
             <Route path="faculty-settings/change-password" element={<FacultyChangePassword />} />
         </Routes>
     </FacultySideBar>
 
    </Router>
    </>
  )
}

export default Faculty
