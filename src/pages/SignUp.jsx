import React, { useState } from "react";

import icon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../schema/schema.js";
import { useFormik } from "formik";
function SignUp() {
  const navigate = useNavigate();
  const role = localStorage.getItem("UserRole");
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      if (role == "Teacher") navigate("/dashboard");
      else navigate("/assignments");
    },
  });
  return (
    <div className="flex  justify-center items-center w-screen h-screen ">
      <form
        className="  flex flex-col justify-center items-center p-5 gap-3 sm:border rounded-xl"
        onSubmit={formik.handleSubmit}
      >
        <img className=" w-72 " src={icon} alt="" />
        <h2 className="text-4xl mb-2 ">
          {" "}
          Welcome to{" "}
          <span className="text-purple-700 font-black text-4xl">JoinEazy</span>
        </h2>

        {/* Username Field */}
        <div className=" w-full p-3 flex flex-col gap-1">
          <label htmlFor="email">Enter Your Name</label>
          <input
            className="border p-3 w-full rounded-xl"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Enter your Name "
          />
          {formik.errors.userName && formik.touched.userName && (
            <p className="text-red-500">{formik.errors.userName}</p>
          )}
        </div>
        {/* Email Field */}
        <div className="w-full p-3 flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            className="border p-3 w-full rounded-xl"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            placeholder="Enter your email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="w-full p-3 flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="border p-3 w-full rounded-xl"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            placeholder="Enter your password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500">{formik.errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r w-full    bottom-32  from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold p-4 rounded-3xl"
        >
          {" "}
          SignUp
        </button>
        <p className="mt-2">
          Already have an account?{" "}
          <span className="text-blue-500" onClick={() => navigate("/login")}>
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
