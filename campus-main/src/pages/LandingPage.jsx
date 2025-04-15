import React from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  { title: "Student", path: "/student" },
  { title: "Faculty", path: "/faculty" },
  { title: "HOD / Principal", path: "/principal" },
  { title: "Admin", path: "/admin" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#8B0000] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-10 text-center">CampusConnect</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {roles.map((role) => (
          <div
            key={role.title}
            onClick={() => navigate(role.path)}
            className="bg-white text-[#8B0000] rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-transform duration-300 text-center font-semibold text-xl"
          >
            {role.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
