import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/assignments")}
      className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
    >
      ⬅️ Back
    </button>
  );
}

export default BackButton;
