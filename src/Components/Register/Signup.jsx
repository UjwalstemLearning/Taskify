import React, { useState } from 'react';
import "./Signup.css";
import { z } from "zod";
import { Link, useNavigate } from 'react-router-dom';
// schema for validation



const signupSchema = z.object({
    username: z.string().min(3, "username must be least 3 "),
    email: z.string().email("invalid"),
    password: z.string().min(6, "password need to be 6"),
    confirm_password: z.string(),
})
    .refine((data) => data.password === data.confirm_password, {
        message: "password do not match",
        path: ["confirm_password"],
    })
export default function Signup({ onRegisterClick }) {
    const [user, setUser] = useState({
        "username": "",
        "email": "",
        "password": "",
        "confirm_password": ""
    });

    const navigate = useNavigate()

    const handleUpdateState = (e) => {
        console.log("changed", e.target.name)
        let { name, value } = e.target
        let stateCopy = user
        stateCopy = { ...stateCopy, [name]: value }
        console.log(stateCopy)
        setUser(stateCopy)
    }
    //validation
    const handleRegister = async(e) => {
        e.preventDefault();
        const result = signupSchema.safeParse(user);
        if (!result.success) {
            let allerror = "";
            for (let err of result.error.issues) {
                allerror += err.message + "\n";
            }
            alert(allerror);
        }
        else {
            // alert("registration success")
            console.log("user data", result.data);
            try{
                const response = await fetch("https://stemlearningshubhamshirodkar.pythonanywhere.com/api/users/register/",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(result.data),
                });

                

                const data = await response.json();
                if(response.ok){
                    //    alert(" User registered successfully!");
                    console.log("Server response:", data);
                    navigate('/signin')

                } else {
                    console.log(data)
                    if(data.username) {
                        alert(" Registration failed: " + (data.username[0]))
                    }
                    else if(data.password) {
                        alert(" Registration failed: " + (data.password[0]))
                    }
                    else if(data.email) {
                        alert(" Registration failed: " + (data.email[0]))
                    }
                    else {
                        alert("Something went wrong!",Object.entries(data)[0])
                    }
                    // alert(" Registration failed: " + (Object.entries));
                }
                

            }
            catch(error){
                console.log("error",error);
                alert("somethind went wrong");
            }
        }

    }


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
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={user.username}
                            onChange={(e) => handleUpdateState(e)}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            onChange={(e) => handleUpdateState(e)}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={user.password}
                            onChange={(e) => handleUpdateState(e)}
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirm_password"
                            value={user.confirm_password}
                            onChange={(e) => handleUpdateState(e)}
                        />
                    </div>

                    {/* Register Button */}
                    <div className="button-wrapper">
                        <button onClick={handleRegister}>Register</button>
                    </div>

                    {/* Footer */}
                    <div className="account-footer">
                        <p>
                            Already have an account?
                            <Link to='/signin'>
                               <a href="#" onChange={handleUpdateState} onClick={onRegisterClick}>Log in</a>
                            </Link>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
