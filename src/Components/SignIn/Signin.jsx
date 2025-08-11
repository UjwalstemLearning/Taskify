import React, { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin({ onSignup }) {
  const [logindata, setLogindata] = useState({
    username: '',
    email: '',
    
  });

   const navigate = useNavigate()
  // Handle input changes
  const handleLoginState = (e) => {
    const { name, value } = e.target;
    setLogindata(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle login submission
  const getLoginData = async (loginPayload) => {
    const url = "https://stemlearningshubhamshirodkar.pythonanywhere.com/api/users/login/";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginPayload)
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Login response:", json);

      // Save token to localStorage (or state/context)
      if (json.access && json.refresh) {
        localStorage.setItem("accessToken", json.access);
        localStorage.setItem("refreshToken", json.refresh);
        navigate('/dashboard')
        // Optionally redirect or update UI here
      } else {
        alert("Login failed: token not received.");
      }

    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed. Check username/password.");
    }
  };

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
            <input
              type="text"
              placeholder="Your Username"
              name="username"
              value={logindata.username}
              onChange={handleLoginState}
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <p>Password</p>
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              value={logindata.password}
              onChange={handleLoginState}
            />
          </div>

          {/* Login Button */}
          <div className="button-wrapper">
            <button onClick={() => getLoginData(logindata)}>Login</button>
          </div>

          {/* Footer */}
          <div className="signup-footer">
            <p>
              Don't have an account?{" "}
              <Link to='/signup'>
                 <a href="#" onClick={onSignup}>Sign up</a>
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
