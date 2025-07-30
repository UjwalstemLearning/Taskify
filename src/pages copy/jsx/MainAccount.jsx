
import React from "react";
import "../css/MainAccountstyle.css";

export default function MainAccount( { onRegisterClick }) { 
  return (
    <div className="account-container">
      <div className="account-card">
        {/* Header */}
        <div className="account-header">
          <h1>Create your account</h1>
        </div>

        {/* Form */}
        <div className="account-form">
          {/* Username Field */}
          <div className="input-wrapper">
            <input type="text" placeholder="Username" />
          </div>

          {/* Email Field */}
          <div className="input-wrapper">
            <input type="text" placeholder="Email" />
          </div>

          {/* Password Field */}
          <div className="input-wrapper">
            <input type="password" placeholder="Password" />
          </div>

          {/* Confirm Password Field */}
          <div className="input-wrapper">
            <input type="password" placeholder="Confirm Password" />
          </div>

          {/* Register Button */}
          <div className="button-wrapper">
            <button>Register</button>
          </div>

          {/* Footer */}
          <div className="account-footer">
            <p>Already have an account? <a href="/login" onClick={onRegisterClick}>Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
