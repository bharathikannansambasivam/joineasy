import React, { useState } from "react";
import icon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schema/schema";

function Login() {
  const navigate = useNavigate();
  const role = localStorage.getItem("UserRole");
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        setError("No account found. Please register first.");
        return;
      } else {
        setError("Invalid email or password!");
      }
      if (
        storedUser.email === values.email &&
        storedUser.password === values.password
      ) {
        if (role === "Teacher") {
          navigate("/dashboard");
        } else if (role === "Student") {
          navigate("/assignments");
        }
      }
    },
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center p-5 gap-3 sm:border rounded-xl"
      >
        <img className="w-72" src={icon} alt="" />
        <h2 className="text-3xl mb-2">
          Welcome Back to{" "}
          <span className="text-purple-700 font-black text-3xl">JoinEazy</span>
        </h2>

        {/* Email Field */}
        <div className="w-full p-3 flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            className="border p-3 w-full rounded-xl"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500">{formik.errors.password}</p>
          )}
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-gradient-to-r w-full from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold p-4 rounded-3xl"
        >
          Log In
        </button>

        <p className="mt-2">
          Don’t have an account?{" "}
          <span
            className="text-purple-700 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
