import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("UserRole");
    alert("You have been logged out successfully!");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium px-4 py-2 rounded-xl shadow-md hover:from-red-600 hover:to-pink-600 transition-all duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
        />
      </svg>
      Logout
    </button>
  );
}

export default Logout;
