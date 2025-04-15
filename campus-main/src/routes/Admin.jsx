import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSideBar from "../components/sidebar/AdminSideBar";
import AdminDashboard from "../pages/AdminDashboard";
import AddStudent from "../components/admin/AddStudent";
import AddFaculty from "../components/admin/AddFaculty";
import DeleteUser from "../components/admin/DeleteUser";
import ViewDepartments from "../components/admin/ViewDepartments";
import ViewLocations from "../components/admin/ViewLocations";
import AdminSettings from "../components/admin/AdminSettings";
import EditAdminProfile from "../components/admin/EditAdminProfile";
import ChangeAdminPassword from "../components/admin/ChangeAdminPassword";

const Admin = () => {
  return (
    <AdminSideBar>
      <Routes>
        <Route path="" element={<AdminDashboard />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="add-faculty" element={<AddFaculty />} />
        <Route path="delete-user" element={<DeleteUser />} />
        <Route path="view-departments" element={<ViewDepartments />} />
        <Route path="view-locations" element={<ViewLocations />} />
        <Route path="admin-settings" element={<AdminSettings />} />
        <Route path="admin-settings/edit-profile" element={<EditAdminProfile />} />
        <Route path="admin-settings/change-password" element={<ChangeAdminPassword />} />
      </Routes>
    </AdminSideBar>
  );
};

export default Admin;
