// src/pages/Login.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-4">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
        {/* Forms Container */}
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            isSignUp ? "translate-x-[-50%]" : ""
          }`}
          style={{ width: "200%" }}
        >
          {/* Sign In */}
          <div className="w-1/2 flex flex-col items-center justify-center p-10">
            <motion.form
              className="w-full max-w-sm space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isSignUp ? 0 : 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-sky-400">Sign In</h1>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />
              <a href="#" className="text-sky-400 text-sm hover:underline">
                Forgot your password?
              </a>
              <Button className="w-full bg-sky-500 hover:bg-sky-600">
                Sign In
              </Button>
            </motion.form>
          </div>

          {/* Sign Up */}
          <div className="w-1/2 flex flex-col items-center justify-center p-10">
            <motion.form
              className="w-full max-w-sm space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isSignUp ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-amber-400">
                Create Account
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />
              <Button className="w-full bg-amber-500 hover:bg-amber-600">
                Sign Up
              </Button>
            </motion.form>
          </div>
        </div>

        {/* Toggle Panel */}
        <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center w-1/2 bg-gradient-to-r from-sky-600 to-amber-600 text-slate-900 p-10">
          {isSignUp ? (
            <>
              <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-sm mb-4 text-center">
                Enter your personal details to sign in
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSignUp(false)}
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Sign In
              </Button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">Hello, Friend!</h2>
              <p className="text-sm mb-4 text-center">
                Register with your personal details to get started
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSignUp(true)}
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
