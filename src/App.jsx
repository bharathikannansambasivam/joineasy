import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";
import AllAssignment from "./components/AllAssignment";
import SubmittedAssignments from "./components/SubmittedAssignment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/assignments" element={<AllAssignment />}></Route>
        <Route
          path="/submitted-assignment"
          element={<SubmittedAssignments />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
