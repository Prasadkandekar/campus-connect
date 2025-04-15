import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AddStudent from "../components/admin/AddStudent";
import AddFaculty from "../components/admin/AddFaculty";
import DeleteUser from "../components/admin/DeleteUser";
import ViewDepartments from "../components/admin/ViewDepartments";
import ViewLocations from "../components/admin/ViewLocations";
import AdminSideBar from "../components/sidebar/AdminSideBar";
import AdminSettings from "../components/admin/AdminSettings";
import EditAdminProfile from "../components/admin/EditAdminProfile";
import ChangeAdminPassword from "../components/admin/ChangeAdminPassword";

const Admin = () => {
  return (
    <Router>
      <AdminSideBar>
        <Routes>
          {/* Dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* User Management */}
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-faculty" element={<AddFaculty />} />
          <Route path="/delete-user" element={<DeleteUser />} />

          {/* Data Viewing */}
          <Route path="/view-departments" element={<ViewDepartments />} />
          <Route path="/view-locations" element={<ViewLocations />} />

          {/* Admin Settings */}
          <Route path="/admin-settings" element={<AdminSettings />} />
          <Route path="/admin-settings/edit-profile" element={<EditAdminProfile />} />
          <Route path="/admin-settings/change-password" element={<ChangeAdminPassword />} />
        </Routes>
      </AdminSideBar>
    </Router>
  );
};

export default Admin;
