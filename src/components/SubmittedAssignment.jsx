import React from "react";

function SubmittedAssignments() {
  const submitted =
    JSON.parse(localStorage.getItem("submittedAssignments")) || [];

  return (
    <div className="w-full max-w-md mt-10">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        ✅ Submitted Assignments
      </h3>

      {submitted.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No assignments submitted yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {submitted.map((item, index) => (
            <li
              key={index}
              className="bg-green-50 border border-green-200 rounded-xl p-3 shadow-sm"
            >
              <h4 className="font-medium text-green-700">{item.title}</h4>
              <p className="text-xs text-gray-500">Submitted successfully</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubmittedAssignments;
