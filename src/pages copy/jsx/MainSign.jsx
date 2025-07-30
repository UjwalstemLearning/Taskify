import React from "react";
import "../css/MainSignstyle.css";


export default function MainSignup({ onSignup }) {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Welcome back</h1>
        </div>

        <div className="signup-form">
          {/* Username Field */}
          <div className="input-group">
            <p>Username</p>
            <input type="text" placeholder="Your Username" />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <p>Password</p>
            <input type="password" placeholder="Your Password" />
          </div>

          {/* Login Button */}
          <div className="button-wrapper">
            <button>Login</button>
          </div>

          {/* Footer */}
          <div className="signup-footer">
            <p>Don't have an account? <a href="#" onClick={onSignup}>Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
