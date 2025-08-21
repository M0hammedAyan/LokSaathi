import React, { useState } from "react";
import "./AuthCard.css";

function AuthCard() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="auth-page">
      <div className={`auth-container ${isSignup ? "signup-mode" : ""}`}>
        
        {/* LEFT SIDE (Form) */}
        <div className="form-section">
          {!isSignup ? (
            <div className="form-box">
              <h2 className="title">Login</h2>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn">Login</button>
              </form>
            </div>
          ) : (
            <div className="form-box">
              <h2 className="title">Sign Up</h2>
              <form>
                <input type="text" placeholder="Full Name" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="number" placeholder="Age" required />
                <select required>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input type="email" placeholder="Email (optional)" />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn">Sign Up</button>
              </form>
            </div>
          )}
        </div>

        {/* RIGHT SIDE (Toggle Message) */}
        <div className="info-section">
          {!isSignup ? (
            <div>
              <h2>Hello, Friend!</h2>
              <p>Register as new and join us</p>
              <button className="btn outline" onClick={() => setIsSignup(true)}>
                Sign Up
              </button>
            </div>
          ) : (
            <div>
              <h2>Welcome Back!</h2>
              <p>Register with your details or login</p>
              <button className="btn outline" onClick={() => setIsSignup(false)}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
