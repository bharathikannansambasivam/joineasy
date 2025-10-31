import React, { useEffect, useState } from "react";
import icon from "../assets/logo.png";
import teacher from "../assets/teacher.png";
import student from "../assets/student.png";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    if (role == "Teacher" || role == "Student") {
      navigate("/signup");
    } else {
      alert("Please select role of the user");
    }
  };
  const [role, setRole] = useState("");

  useEffect(() => {
    if (role) localStorage.setItem("UserRole", role);
  }, [role]);
  return (
    <div className="flex  justify-center items-center w-screen h-screen ">
      <div className="  flex flex-col justify-center items-center p-5 w- gap-3 md:border rounded-2xl ">
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-300 to-pink-300 p-3 rounded-full opacity-90">
          <div className="h-2 w-2 bg-purple-700 rounded-full"></div>✨ The
          Future of Team Collaboration
          <button></button>
        </div>
        <img className=" w-72 " src={icon} alt="" />
        <h2 className="text-4xl ">
          {" "}
          Welcome to{" "}
          <span className="text-purple-700 font-black text-4xl">JoinEazy</span>
        </h2>
        <p className="text-black font-medium text-center max-w-lg  ">
          <i>
            The modern platform that makes collaboration effortless and
            intuitive for teams everywhere.
          </i>
        </p>

        <div className="flex gap-10 justify-center items-center p-5 ">
          <div
            className={`cursor-pointer border-2 rounded-xl p-3 w-28 text-center transition ${
              role === "Teacher"
                ? "border-purple-600 bg-purple-100"
                : "border-gray-300"
            }`}
            onClick={() => setRole("Teacher")}
          >
            <img src={teacher} alt="Teacher" />
            <p className="font-semibold">Teacher</p>
          </div>

          <div
            className={`cursor-pointer border-2 rounded-xl p-3 w-28 text-center transition ${
              role === "Student"
                ? "border-blue-600 bg-blue-100"
                : "border-gray-300"
            }`}
            onClick={() => setRole("Student")}
          >
            <img src={student} alt="Student" />
            <p className="font-semibold">Student</p>
          </div>
        </div>
        <button
          onClick={handleStart}
          className="bg-gradient-to-r w-3/4  md:static md:w-3/4  bottom-32  from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold p-4 rounded-3xl"
        >
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
