import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentDashboard from "../pages/StudentDashboard";
import AttendanceView from "../components/student/AttendanceView";
import DownloadNotes from '../components/student/DownloadNotes';
import ViewStressLevel from '../components/student/ViewStressLevel';
import StudentSideBar from '../components/sidebar/StudentSideBar';
import "../App.css"
import StudentProfile from '../components/student/StudentProfile';
import StudentSettings from '../components/student/StudentSettings';
import StudentProfileEdit from '../components/student/StudentProfileEdit';
import StudentPasswordChange from '../components/student/StudentPasswordChange';
import LandingPage from '../pages/LandingPage';

const Student = () => {
  return (
   <>
   <Router>
    <StudentSideBar>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/attendance" element={<AttendanceView />} />
            <Route path="/notes" element={<DownloadNotes />} />
            <Route path="/stresslevel" element={<ViewStressLevel />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/student-settings" element={<StudentSettings />} />
            <Route path="student-settings/edit-profile" element={<StudentProfileEdit />} />
            <Route path="student-settings/change-password" element={<StudentPasswordChange />} />
        </Routes>
    </StudentSideBar>

   </Router>
   </>
  )
}

export default Student
