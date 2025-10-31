import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

function AllAssignment({ refresh }) {
  const [assignments, setAssignments] = useState(
    JSON.parse(localStorage.getItem("assignments")) || []
  );
  const role = localStorage.getItem("UserRole");
  const navigate = useNavigate();
  useEffect(() => {
    const savedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];
    setAssignments(savedAssignments);
  }, [refresh]);
  useEffect(() => {
    if (!role) {
      alert("You must log in first!");
      navigate("/");
    }
  }, [role, navigate]);

  const [submitted, setSubmitted] = useState(
    JSON.parse(localStorage.getItem("submittedAssignments")) || []
  );

  const handleDelete = (id) => {
    const updatedAssignments = assignments.filter((x) => x.id !== id);
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    alert("🗑️ Assignment deleted successfully!");
  };

  const handleSubmit = (title) => {
    const updated = [...submitted, { title }];
    localStorage.setItem("submittedAssignments", JSON.stringify(updated));
    setSubmitted(updated);
    alert(`✅ Assignment "${title}" submitted successfully!`);
  };

  const isSubmitted = (title) => submitted.some((x) => x.title === title);

  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      {role == "Student" && <Logout />}
      <div className="flex justify-between gap-2 items-center w-full max-w-xl mb-6">
        <h3 className="text-2xl font-bold text-purple-700 tracking-wide">
          Assignments
        </h3>

        {role === "Student" && (
          <button
            onClick={() => navigate("/submitted-assignment")}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs p-2 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
          >
            Submitted Assignments
          </button>
        )}
      </div>

      {assignments.length === 0 ? (
        <p className="text-gray-500 text-center italic mt-20">
          No assignments created yet.
        </p>
      ) : (
        <div className="grid gap-5 w-full max-w-xl">
          {assignments.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-200"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg text-purple-700">
                  {item.title}
                </h4>

                {isSubmitted(item.title) && role !== "Teacher" && (
                  <span className="text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                    ✅ Submitted
                  </span>
                )}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 underline"
              >
                🔗 Open Drive Link
              </a>

              <div className="flex justify-end mt-2">
                {role === "Teacher" ? (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded-lg shadow transition-all"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                ) : !isSubmitted(item.title) ? (
                  <button
                    onClick={() => handleSubmit(item.title)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 text-sm rounded-lg shadow-md transition-all"
                  >
                    Submit
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllAssignment;
