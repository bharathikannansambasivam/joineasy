import React, { useEffect, useState } from "react";
import AllAssignment from "./AllAssignment";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

function Dashboard() {
  const [refresh, setRefresh] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const role = localStorage.getItem("UserRole");
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (!role) {
      alert("You must log in first!");
      navigate("/");
    }
  }, [role, navigate]);

  const handleAssignment = () => {
    if (!title && !link && !description) {
      alert("Please fill required details");
    }

    const newAssignment = {
      id: new Date(),
      title,
      link,
      description,
    };
    const existingAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];
    const updatedAssignments = [...existingAssignments, newAssignment];
    setAssignments(updatedAssignments);

    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    setTitle("");
    setLink("");
    setDescription("");
    setShowForm(false);
    setRefresh(!refresh);
  };
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-50 p-5">
      <Logout />
      <div className="">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">
          Teacher Dashboard
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl w-full"
        >
          Create Assignment
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
          {/* Create Assignment Section */}
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Create New Assignment
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Assignment Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-3 rounded-xl w-full"
            />

            <input
              type="text"
              placeholder="Enter Drive Link / YT link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="border p-3 rounded-xl w-full"
            />

            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-3 rounded-xl w-full resize-none"
              rows="3"
            />

            <button
              onClick={handleAssignment}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl w-full"
            >
              Save Assignment
            </button>
          </div>
        </div>
      )}

      <AllAssignment refresh={refresh} />
    </div>
  );
}

export default Dashboard;
