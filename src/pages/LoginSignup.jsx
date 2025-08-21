import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css"; // we’ll put the CSS separately

function LoginSignup() {
  return (
    <div className="page-container flex justify-center items-center">
      <div className="form-box register bg-white text-black p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="title text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form action="#">
          {/* Username */}
          <div className="input-box mb-4">
            <input type="text" required className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none p-2"/>
            <label className="block text-sm text-gray-500">Username</label>
            <i className="bx bxs-user"></i>
          </div>

          {/* Email */}
          <div className="input-box mb-4">
            <input type="email" required className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none p-2"/>
            <label className="block text-sm text-gray-500">Email</label>
            <i className="bx bxs-envelope"></i>
          </div>

          {/* Password */}
          <div className="input-box mb-6">
            <input type="password" required className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none p-2"/>
            <label className="block text-sm text-gray-500">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          {/* Submit */}
          <button type="submit" className="btn w-full bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 rounded-lg transition duration-300">
            Sign Up
          </button>
        </form>

        {/* Already have account? */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
