import React from "react";
import BackButton from "./BackButton";

function SubmittedAssignments() {
  const submitted =
    JSON.parse(localStorage.getItem("submittedAssignments")) || [];

  return (
    <div className="w-full mt-10 flex flex-col items-center">
      <BackButton />
      <h3 className="text-2xl font-semibold mb-6 text-purple-700">
        ✅ Submitted Assignments
      </h3>

      {submitted.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No assignments submitted yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-4 w-full max-w-md">
          {submitted.map((item, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h4 className="font-semibold text-green-700 text-lg">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                ✅ Submitted successfully
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubmittedAssignments;
